//
//  IJKAudioPlayerController.h
//  testproject
//
//  Created by Neami National on 5/12/17.
//
#import <IJKMediaFramework/IJKMediaFramework.h>
#import <Cordova/CDVPlugin.h>
@class IJKMediaControl;

@interface IJKAudioPlayerController : CDVPlugin

@property(atomic,strong) NSURL *url;
@property(atomic, retain) id<IJKMediaPlayback> player;
- (void)playWithUrl:(CDVInvokedUrlCommand*)command;
- (void)reset;
- (void)play:(CDVInvokedUrlCommand*)command;
- (void)pause:(CDVInvokedUrlCommand*)command;
- (void)sliderValueChanged:(CDVInvokedUrlCommand*)command;
- (void)showVideo:(CDVInvokedUrlCommand*)command;

@end
