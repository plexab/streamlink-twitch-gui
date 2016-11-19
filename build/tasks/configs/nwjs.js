var files = [
	"build/tmp/prod/**"
];

var filesWin32 = files.concat(
	"!build/tmp/prod/bin/win64/**"
);
var filesWin64 = files.concat(
	"!build/tmp/prod/bin/win32/**"
);
var filesMacOS = files.concat(
	"!build/tmp/prod/bin/win32/**",
	"!build/tmp/prod/bin/win64/**"
);
var filesLinux32 = files.concat(
	"!build/tmp/prod/bin/win32/**",
	"!build/tmp/prod/bin/win64/**"
);
var filesLinux64 = files.concat(
	"!build/tmp/prod/bin/win32/**",
	"!build/tmp/prod/bin/win64/**"
);


module.exports = {
	options: {
		files   : "<%= dir.tmp_prod %>/**",
		buildDir: "<%= dir.releases %>",
		cacheDir: "<%= dir.cache %>",
		version : "<%= main['nwjs-version'] %>",
		flavor  : "normal",
		winIco  : "<%= dir.resources %>/icons/icon-16-32-48-256.ico",
		macIcns : "<%= dir.resources %>/icons/icon-1024.icns",
		macPlist: {
			CFBundleIdentifier : "<%= main['app-identifier'] %>",
			CFBundleName       : "<%= main['display-name'] %>",
			CFBundleDisplayName: "<%= main['display-name'] %>",
			LSEnvironment      : {
				PATH: "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
			}
		}
	},

	win32: {
		options: {
			files: filesWin32,
			platforms: [ "win32" ]
		}
	},
	win64: {
		options: {
			files: filesWin64,
			platforms: [ "win64" ]
		}
	},

	osx32: {
		options: {
			files: filesMacOS,
			platforms: [ "osx32" ]
		}
	},
	osx64: {
		options: {
			files: filesMacOS,
			platforms: [ "osx64" ]
		}
	},

	linux32: {
		options: {
			files: filesLinux32,
			platforms: [ "linux32" ]
		}
	},
	linux64: {
		options: {
			files: filesLinux64,
			platforms: [ "linux64" ]
		}
	}
};
