package com.fedreactnativeintro;

import android.app.Activity;
import android.support.v7.widget.LinearLayoutCompat;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import static android.content.res.Configuration.ORIENTATION_LANDSCAPE;


public class DeviceOrientation extends ReactContextBaseJavaModule {

    public DeviceOrientation(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Orientation";
    }

    @ReactMethod
    public void getCurrent(Promise promise) {
        int orientation = getCurrentActivity().getResources().getConfiguration().orientation;
        String orientationStr = orientation == ORIENTATION_LANDSCAPE ? "landscape" : "portrait";
        promise.resolve(orientationStr);
    }
}