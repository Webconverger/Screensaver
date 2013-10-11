<https://github.com/Webconverger/webc/issues/168>

Demo Webconverger with this configuration:

	homepage=http://attract.webconverger.com
	prefs=http://ppd.webconverger.com/2013/attract.js
	noblank

attract.js contains:

	pref("full-screen-api.allow-trusted-requests-only", false);
	pref("full-screen-api.approval-required", false);

Which allows us to override fullscreen API restrictions.
