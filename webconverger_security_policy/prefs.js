Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://gre/modules/NetUtil.jsm");
Services.perms.add(NetUtil.newURI("http://attract.webconverger.com/"), "fullscreen", 1);
pref("full-screen-api.allow-trusted-requests-only", false);
