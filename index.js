const  driver = {};
function updateDriverWithKeyAndValue
(driver,key,value){
    const newObj = {...driver}
    newObj[key] = value;
    
   return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
    driver[key] = value; 
     return driver;
}

function  deleteFromDriverByKey(driver, key)
{   
    let newDriver = {...driver};
    delete newDriver[key];

    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key)
{
    delete driver[key];

    return driver;
}