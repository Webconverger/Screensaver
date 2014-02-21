<https://github.com/Webconverger/webc/issues/168>

Demo Webconverger with this configuration:

	homepage=http://attract.webconverger.com
	prefs=http://ppd.webconverger.com/2013/attract.js
	noblank

attract.js contains:

	pref("full-screen-api.allow-trusted-requests-only", false);
	pref("full-screen-api.approval-required", false);

Which allows us to override fullscreen API restrictions.

Update: Since February 2014, [Webconverger supports MP4 playback](https://github.com/Webconverger/webc/commit/f07f99a88617a07435bf9621c970b6562b64549b)
