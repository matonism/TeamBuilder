var StorageManager = function(StorageManager){
	StorageManager.RECENT_NAMES = 'recent-names';
	StorageManager.RECENT_SETS = 'recent-sets';
	// StorageManager.PUBLIC_KEY = 'public-key';
	// StorageManager.PRIVATE_KEY = 'private-key';
	// StorageManager.SERVER_KEY = 'server-key';
	// StorageManager.SYM_KEY = 'sym-key';
	
	// validKeyPairIsStored = function(){
	// 	return (!!StorageManager.getKey(StorageManager.PUBLIC_KEY) && !!StorageManager.getKey(StorageManager.PRIVATE_KEY));
	// }

	// StorageManager.setUpClientKeys = function(){
	// 	if(!validKeyPairIsStored()){
	// 		var keys = Encryption.generateKeys(1024, false);
	// 		StorageManager.storeKey(StorageManager.PUBLIC_KEY, escape(keys.publicKey));
	// 		StorageManager.storeKey(StorageManager.PRIVATE_KEY, escape(keys.privateKey));
	// 		console.log('new rsa keys created');
	// 	}
	// }

	// StorageManager.clearClientKeys = function(){
	// 	StorageManager.clearKey(StorageManager.PUBLIC_KEY);
	// 	StorageManager.clearKey(StorageManager.PRIVATE_KEY);
	// }


	//recentNames = {Mike: {count: 1, timesNotIncluded: 0}}
	StorageManager.setRecentNames = function(newRecentNames){
		let recentNames = (!!localStorage.getItem(StorageManager.RECENT_NAMES) ? unescape(localStorage.getItem(StorageManager.RECENT_NAMES)) : null);
		if(newRecentNames){
			recentNames 
			for(recentNames)
		}
	}

	//generic methods
	//key types = [public-key, private-key, server-key, symmetric-key, session-id]
	StorageManager.storeKey = function(keyType, key){
		if(!!keyType){
			localStorage.setItem(keyType, key);
		}
	}

	StorageManager.clearKey = function(keyType){
		localStorage.setItem(keyType, null);
	}

	StorageManager.getKey = function(keyType){
		return (!!localStorage.getItem(keyType) ? unescape(localStorage.getItem(keyType)) : null);
	}

	return StorageManager;

}(StorageManager || {});