import StorageManager from './StorageManager';

export function getLastGroup(){
    return StorageManager.getValueAsJSON(StorageManager.PREVIOUS_GROUP);
}

export function setLastGroup(groupOfMembers){
    StorageManager.setValueFromJSON(StorageManager.PREVIOUS_GROUP, groupOfMembers);
}

export function addToLastGroup(newMember){
    let lastGroup = StorageManager.getValueAsJSON(StorageManager.PREVIOUS_GROUP);
    let newGroup = lastGroup === null ? [newMember] : lastGroup.push(newMember);
    StorageManager.setValueFromJSON(StorageManager.PREVIOUS_GROUP, newGroup);
    return newGroup;
}

export function removeFromLastGroup(memberToRemove){

    let lastGroup = StorageManager.getValueAsJSON(StorageManager.PREVIOUS_GROUP);
    let newGroup = lastGroup;
    if(lastGroup !== null){
        let count = 0;
        newGroup = lastGroup.filter(member => {
            if(count === 0){
                if(member == memberToRemove){
                    count++;
                    return false;
                }
            }
            return true;
        });
    }else{
        console.log('cannot remove a member from an empty list');
        return null;
    }
    StorageManager.setValueFromJSON(StorageManager.PREVIOUS_GROUP, newGroup);
    return newGroup;
}

