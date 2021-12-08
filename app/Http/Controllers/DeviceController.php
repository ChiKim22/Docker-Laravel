<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Device/Index', [
            'devices' => Device::orderBy('id', 'desc')->paginate(6)->through(function ($device) {
                return [
                    'id' => $device->id,
                    'image' => $device->image,
                    'name' => $device->name,
                    'brand' => $device->brand,
                    'release' => $device->release,
                    'spec' => $device->spec,
                ];
            }), // desc
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Device/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $now = now(); // Current year

        $validated = $request->validate([
            'brand' => 'required',
            'spec' => 'required | min:1',
            'release' => 'required |numeric|min:1900|max:'.($now->year+1),
            'name' => 'required',
            'image' => 'image',
        ]);


        // dd($request->all());
        $path = $request->image->store('image', 'public');

        $validated = array_merge($validated, ['image' => $path]);

        $devices = Device::create($validated);
        $devices->save();

        return redirect()->route('devices.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        $devices = Device::find($id);
        return Inertia::render('Device/Show', [
            'devices'=> $devices
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    // public function edit(Device $device)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device, $id)
    {
        $devices = Device::find($id);
        if($devices != null){
            $devices->delete();
            return redirect()->back();
        }
    }
}
