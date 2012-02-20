# A desktop screensaver in HTML5 for use with a [customised Webconverger](http://webconverger.com/)

With Webconverger [noblank](http://webconverger.org/blanking/) set, i.e. Xorg's
default screensaver is disabled, you could add your own screensaver to your
homepage.

This project is setup to collect examples.

## Use cases

**Not digital signage** obviously, as a screensaver requires some interaction to toggle states.

1. Instead of Webconverger statically fixed with a screen blanking timeout, the customised homepage= owner can tweak this on his/her own accord
2. In a kiosk deployment, after 10 minutes a **attractor loop** kicks in

## Implementation

So do something simple, look at the [first commit](https://github.com/Webconverger/Screensaver/commit/38022ea507a29489c2cfbee3e2e090081cdfc2b1).

Implementing a carousel requires the Web designer to split the page in a `#screensaver` and `#main` parts.

## Some things to still consider

Modifying <https://github.com/Webconverger/iceweasel-webconverger>:

1. To be a by default **black** background, instead of white (having a white background as a screensaver would defeat the point)
2. Re-implementing `kioskresetstation` in the [browser extension](https://github.com/Webconverger/iceweasel-webconverger), instead of Xorg (this could be more flexible)
3. Hiding the Chrome so the screensaver consumes the entire screen

WRT to (1), a lot of Web pages **assume** a white background and hence
`pref("browser.display.background_color", "#000000")` could lead to confusion
and complaints.

## Back story

<https://groups.google.com/forum/?fromgroups#!searchin/webc-users/screensaver/webc-users/ZW-S_4RYJTU/oznu1nIORDgJ>
