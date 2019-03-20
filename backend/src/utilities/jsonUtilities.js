module.exports = {
  deletePrivateFieldOnJSON: (jsonToModify, toDelete) => {
    const jsonResult = jsonToModify;
    for (let i = 0; i < toDelete.length; i += 1) {
      // eslint-disable-next-line no-prototype-builtins
      if (jsonToModify.hasOwnProperty(toDelete[i])) {
        delete jsonResult[toDelete[i]];
      } else {
        console.log('This JSON does not have a key named ', toDelete[i]);
      }
    }
    return jsonResult;
  },
  deletePrivateFieldOnArrayOfJSON: (ArrayToModify, toDelete) => {
    const toReturn = ArrayToModify;
    for (let i = 0; i < ArrayToModify.length; i += 1) {
      const jsonDoc = ArrayToModify[i].toJSON();
      toReturn[i] = module.exports.deletePrivateFieldOnJSON(jsonDoc, toDelete);
    }
    return toReturn;
  },
};
