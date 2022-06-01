import StorageManager from './StorageManager';

const STORAGE_KEY = 'saved-groups'

export function getSavedGroups(){
    return StorageManager.getValueAsJSON(STORAGE_KEY);
}

export function setSavedGroups(groups){
    StorageManager.setValueFromJSON(STORAGE_KEY, groups);
}

export function addSavedGroup(name, group){
    let savedGroups = StorageManager.getValueAsJSON(STORAGE_KEY);
    let newGroups = savedGroups === null ? {} : savedGroups;
    newGroups[name] = group
    StorageManager.setValueFromJSON(STORAGE_KEY, newGroups);
    return newGroups;
}

export function removeSavedGroup(name){

    let savedGroups = StorageManager.getValueAsJSON(STORAGE_KEY);

    let newGroups = savedGroups;
    if(savedGroups !== null && savedGroups[name] !== null){
        delete savedGroups[name];
        newGroups = savedGroups;
    }else{
        console.log('group did not exist');
        return null;
    }
    StorageManager.setValueFromJSON(STORAGE_KEY, newGroups);
    return newGroups;
}

