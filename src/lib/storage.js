export const cookieFetchAll = () => {
 return Object.assign(...document.cookie.split(';')
   .map(cookie => {
     let [key, value] = cookie.split('=');
     return { [key.trim()]: value };
   }));
};



export const storageSet = (key, data) => {
 chrome.storage.sync.set({ key : data }, function () {
  err ? console.log(err) : console.log('STORAGE SET THIS DATA', data)
  
})
}

export const storageGet = (key) => {
 chrome.storage.sync.get(key, function (pulledNotes) {
  console.log('STORAGE GET THIS DATA', pulledNotes);
  return pulledNotes
})
}