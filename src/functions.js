function checkInputFields(fieldsState) {
    /* 
        *İşlevi: Parametre olarak içerisine inputların valuelarını taşıyan statelerin olduğu bir array alır.
                 Bu array üzerinde döngü yardımıyla boş bir değer olup olmadığı kontrol edilir.

        *Döndürülen Değer: True || False 
    
    */

    for (const field of fieldsState) {
        if (field !== "") {
            continue
        } else {
            return false;

        }
    }
    return true;
}

export {checkInputFields}