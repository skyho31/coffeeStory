function checkDeviceSize(){
	return window.innerWidth < 800 ? 'mobile' : 'pc';
}

export const checkDevice = () => {
	var result = checkDeviceSize();
	console.log(result);

	if(result === "mobile"){
		return {
			type:'CHECK_DEVICE',
			payload: result
		}
	} else {
		return {
			type:'CHECK_DEVICE',
			payload: result
		}
	}
}