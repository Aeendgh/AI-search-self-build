const ul = document.querySelector("ul div"),
    inputbox = document.getElementById("inputmain");
const suggestionEl = document.querySelector(".suggestion-container");

const Button = document.querySelector("button");
let tags = [];
var virtualTypesObj = [
    { value: "752N", type: "J4-CVT", name: "jacj4" },
    { value: "742S", type: "S3-CVT", name: "jacs3" },
    { value: "762S", type: "S5 1.5-DCT", name: "jacs5" },
    { value: "811P", type: "T8-MT", name: "kmct8" },
    { value: "822S", type: "K7-DCT", name: "kmck7" },
    { value: "832N", type: "J7-DCT", name: "kmcj7" },
    { value: "842N", type: "A5-AT", name: "kmca5" },
    { value: "852S", type: "X5-AT", name: "kmcx5" },
];

var ColorCodeObj = [
    { name: 'سفیدروغنی', value: '102S' },
    { name: 'سفیدصدفیمتالیک', value: '120M' },
    { name: 'آبیفیروزهای سادهدوپوششه', value: '281S' },
    { name: 'آبیدیپلماتمتالیک', value: '291M' },
    { name: 'نقرهایآبیمتالیک', value: '292M' },
    { name: 'آبینفتیمتالیک', value: '299M' },
    { name: 'سرمهایمتالیک', value: '321M' },
    { name: 'آبیزنگاریمتالیک', value: '335M' },
    { name: 'سرمهایصدفیمتالیک', value: '392D' },
    { name: 'سرمهایصدفیمتالیک', value: '392O' },
    { name: 'سبززیتونیمتالیک', value: '415M' },
    { name: 'سبزنعناییسادهدوپوششه', value: '481S' },
    { name: 'آلبالوییمتالیک', value: '520M' },
    { name: 'قرمزمتالیک', value: '525M' },
    { name: 'قرمزمعمولی', value: '531S' },
    { name: 'زردمعمولی', value: '602S' },
    { name: 'نارنجیمتالیک', value: '615C' },
    { name: 'بادمجانیمتالیک', value: '650M' },
    { name: 'بنفشبادمجانیمتالیک', value: '655M' },
    { name: 'نوکمدادیمتالیک', value: '691M' },
    { name: 'خاکستریطوسیروشنمتالیک', value: '711M' },
    { name: 'مشکیماتدوپوششه', value: '781D' },
    { name: 'مشکیماتدوپوششه', value: '781O' },
    { name: 'مشکیمیکامتالیک', value: '719M' },
    { name: 'مشکیمتالیک', value: '720M' },
    { name: 'مشکیمعمولی', value: '720S' },
    { name: 'مشکیذغالیمتالیک', value: '725M' },
    { name: 'مشکیلیزری', value: '726M' },
    { name: 'قهوهایمتالیک', value: '840M' },
    { name: 'قهوهایروشنمتالیک', value: '842M' },
    { name: 'قهوهایسیرمتالیک', value: '845M' },
    { name: 'کرممعمولی', value: '926S' },
    { name: 'نقرهاییسیرمتالیک', value: '962M' },
    { name: 'آسترED', value: 'ED' },
    { name: 'بدونرنگ', value: 'NoColor' },
];

var BodyShopObj = ["metalfinish", "Metalfinish", "METALFINISH", "MetalFinish", "بدنه", "سالنبدنه"];
var PaintShopObj = ["topcoat", "TopCoat", "Topcoat", "رنگ", "رنگشده", "سالنرنگ"];
var TrimShopObj = ["trim", "TrimShop", "trimshop","TRIM", "تزیینات", "تزئینات", "سالنتزیینات", "سالنتزئینات" , "مکانیکی" , "سالنمکانیکی"];
var FinalObj = ["final", "Final", "FINAL", "فاینال", "کنترلنهایی", "سالنکنترلنهایی" ,"کنترلشده"];
var ParkingObj = ["PARKING", "parking", "Parking", "پارکینگ", "ورودبهپارکینگ"];
var TransObj = ["trans", "TRANS", "Trans", "حمل", "حمل شده ها"];
var WorkShopObj = [...BodyShopObj,...PaintShopObj,...TrimShopObj,...FinalObj,...ParkingObj,...TransObj];
var finalvalue = [];
function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove(),);
    // tags.forEach(tag => {
    //     // let Litag = `<li class="defualt">${tag}<span class="XIcon" onclick="remove(this, '${tag}')">×</span></li>`;
    //     // ul.insertAdjacentHTML("afterbegin", Litag);
    //     // finalvalue = tag + finalvalue;
    // });

}
function remove(element, tag){
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    // document.getElementsByName("virtualTypeBoxValue")[0].value = "";
    // document.getElementById("virtualTypeBox").checked = false;
    console.log(tags)
    findingWorkShop();
}
function addList(e){
    if (e.key == "Enter") {
        let tag = e.target.value;
        if (tag.length > 1 && !tags.includes(tag)) {
            tag.split(' ').forEach(tag => {
                tags.push(tag);
                console.log(tags);
                createTag();
                console.log(finalvalue);
                findingWorkShop();
            });
            inputbox.addEventListener('Enter', inputbox.value = "");
        }
    }
}
inputbox.addEventListener('keyup', addList);

// recongnizing difrenet values 
const Fields = [];

function findingVIrtualtype() {
/*    findingBodyShop();*/
    //findingPaintShop();
    //findingTrimShop();
    //findingFinalShop();
/*    findingColorCode();*/
    // var res = virtualTypesNames.find(v => v == tags);
    var virtualtype = document.getElementById("virtualtypeShown");
    var virtualtypesHidden = document.querySelectorAll(".virtualtypesHidden");

    var CheckVirtualtype = tags.filter(el => virtualTypesObj.map(elements => {
        return elements.name
    }).includes(el));
    var indexOf = virtualTypesObj.findIndex(object => {
        return object.name == CheckVirtualtype;
    });
    var vitualtypeRes;
    vitualtypeRes = virtualTypesObj[indexOf].value;

    console.log(CheckVirtualtype ? CheckVirtualtype : "wasn't found");
    console.log(vitualtypeRes);

    if (vitualtypeRes.length > 0) {
        virtualtypesHidden.forEach((virtualtypehidden) => {
            virtualtypehidden.value = vitualtypeRes;
        });
    };
}

function findingColorCode() {

   var colorcode = document.getElementById("colorcodeShown");
   var colorcodesHidden = document.querySelectorAll(".colorcodesHidden");
   var CheckColorCode = tags.filter(el => ColorCodeObj.map(elements => {
      return elements.name
    }).includes(el));
    var indexOf = ColorCodeObj.findIndex(object => {
        return object.name == CheckColorCode;
    });
    var ColorCodeRes;
    ColorCodeRes = ColorCodeObj[indexOf].value;

    console.log(CheckColorCode ? CheckColorCode : "wasn't found");
    console.log(ColorCodeRes);

    if (ColorCodeRes.length > 0) {
        colorcodesHidden.forEach((colorcodeHidden) => {
            colorcodeHidden.value = ColorCodeRes;
        });
    };
}

function findingBodyShop() {
    var CheckMetalFinish = tags.filter(function (e) {
        return BodyShopObj.includes(e);
    });
    if (CheckMetalFinish.length > 0) {
        // document.getElementsByName("virtualTypeBoxValue")[0].value = "";

        document.getElementById("StartingDatePL").value = "1402/08/08";
        document.getElementById("SameDatePL").checked = true;
        if (DateInputEnd.value == "") {
            document.getElementById("SameDatePL").checked = true;
            FillPLDate();
        }        

    }
}

function findingPaintShop() {
    var CheckTopCoat = tags.filter(function (e) {
        return PaintShopObj.includes(e);
    });
    if (CheckTopCoat.length > 0) {

        document.getElementById("paintshop").checked = true;
        if (DateInputEnd.value == "") {
            document.getElementById("SameDatePL").checked = true;
            FillPLDate();
        } 
    }
}

function findingTrimShop() {
    var CheckTrim = tags.filter(function (e) {
        return TrimShopObj.includes(e);
    });
    if (CheckTrim.length > 0) {
        document.getElementById("trimshop").checked = true;
        if (DateInputEnd.value == "") {
            document.getElementById("SameDatePL").checked = true;
            FillPLDate();
        }     
    }
}

function findingFinalShop() {
    var CheckFinal = tags.filter(function (e) {
        return FinalObj.includes(e);
    });
    if (CheckFinal.length > 0) {
        // document.getElementsByName("virtualTypeBoxValue")[0].value = "";
        //document.getElementsByName("TopcoatDate")[0].value = "1402/08/07";
        document.getElementById("final").checked = true;
    }
}
// console.log(WorkShopObj);
function findingWorkShop(){
    var DateInputStart = document.getElementById("DateStart"),
    DateInputEnd = document.getElementById("DateEnd");
    var CheckWorkShop = tags.filter(function (e) {
        return WorkShopObj.includes(e);
    });
    if (CheckWorkShop.length > 0) {
        DateInputStart.style.display = "block";
    }
    else{
        DateInputStart.style.display = "none";
    } 
}

function clearForm() {
    var CheckBoxes = document.querySelectorAll("input[type=checkbox]");
    CheckBoxes.forEach((CheckBox) => {
        CheckBox.checked = false;
    });
}
// function to pass the data to server
function submitForm() {
    clearForm();
    document.getElementById("bodyshop").checked = false;
    console.log(document.getElementById("bodyshop").value);
    findingVIrtualtype();
    // اضافه کردن فرم مخفی به صفحه
    document.body.appendChild(hiddenForm);

    // ارسال فرم مخفی
    hiddenForm.submit();
}
function displayDateEnd(){
    document.getElementById("DateEnd").style.display = "block";
}