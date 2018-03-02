//
//  Orientation.m
//  FEDReactNativeIntro
//
//  Created by Ran Greenberg on 06/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "Orientation.h"

@implementation Orientation

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getCurrent,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  UIDeviceOrientation orientation = [[UIDevice currentDevice] orientation];
  NSString *const result = orientation == UIDeviceOrientationPortrait ? @"portrait" : @"landscape";
  resolve(result);
}

@end
