/* eslint-env browser */

const level = (() => {
	if (typeof navigator !== 'undefined') {
		if (navigator.userAgentData) {
			const brand = navigator.userAgentData.brands.find(({brand}) => brand === 'Chromium');
			if (brand && brand.version > 93) {
				return 3;
			}
		}
	
		if (/\b(Chrome|Chromium)\//.test(navigator.userAgent)) {
			return 1;
		}
	}
	return 0;
})();

const colorSupport = level !== 0 && {
	level,
	hasBasic: true,
	has256: level >= 2,
	has16m: level >= 3,
};

const supportsColor = {
	stdout: colorSupport,
	stderr: colorSupport,
};

export default supportsColor;
