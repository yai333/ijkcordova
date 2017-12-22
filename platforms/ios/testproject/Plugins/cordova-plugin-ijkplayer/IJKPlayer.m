/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

#import "IJKPlayer.h"
#import "IJKMoviePlayerViewController.h"
#import <Cordova/CDV.h>

@implementation IJKPlayer

/* log a message */
- (void)init:(CDVInvokedUrlCommand*)command
{
    id message = [command argumentAtIndex:0];

    NSLog(@"%@", message);
    
    //UIView* parentView = self.webView.superview.viewController;
    //NSURL *URL = [NSURL URLWithString:@"http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3"];
    NSURL *URL = [NSURL URLWithString:@"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"];
   // self.url =URL;
    IJKVideoViewController* _videoView = [[IJKVideoViewController alloc] initWithURL:URL];
   // IJKVideoViewController* _videoView = [[IJKVideoViewController alloc] initWithNibName:nil bundle:nil];
    [self.viewController presentViewController:_videoView animated:YES  completion:^{}];
}

@end
