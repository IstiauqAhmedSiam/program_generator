let monthList = {
    "Jan" : {
        "fullName": "January",
        "name" : "জানুয়ারি",
        "numeric": 0,
        "numericBn": "১",
        "days" : 31
    },
    "Feb" : {
        "fullName": "February",
        "name" : "ফেব্রুয়ারি",
        "numeric": 1,
        "numericBn": "২",
    },
    "Mar" : {
        "fullName": "March",
        "name" : "মার্চ",
        "numeric": 2,
        "numericBn": "৩",
        "days" : 31
    },
    "Apr" : {
        "fullName": "April",
        "name" : "এপ্রিল",
        "numeric": 3,
        "numericBn": "৪",
        "days" : 30
    },
    "May" : {
        "fullName": "May",
        "name" : "মে",
        "numeric": 4,
        "numericBn": "৫",
        "days" : 31
    },
    "Jun" : {
        "fullName": "June",
        "name" : "জুন",
        "numeric": 5,
        "numericBn": "৬",
        "days" : 30
    },
    "Jul" : {
        "fullName": "July",
        "name" : "জুলাই",
        "numeric": 6,
        "numericBn": "৭",
        "days" : 31
    },
    "Aug" : {
        "fullName": "August",
        "name" : "আগস্ট",
        "numeric": 7,
        "numericBn": "৮",
        "days" : 31
    },
    "Sep" : {
        "fullName": "September",
        "name" : "সেপ্টেম্বর",
        "numeric": 8,
        "numericBn": "৯",
        "days" : 30
    },
    "Oct" : {
        "fullName": "October",
        "name" : "অক্টোবর",
        "numeric": 9,
        "numericBn": "১০",
        "days" : 31
    },
    "Nov" : {
        "fullName": "November",
        "name" : "নভেম্বর",
        "numeric": 10,
        "numericBn": "১১",
        "days" : 30
    },
    "Dec" : {
        "fullName": "December",
        "name" : "ডিসেম্বর",
        "numeric": 11,
        "numericBn": "১২",
        "days" : 31
    },
}

let banglaNumber = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

function getBnNum(str){
  for (var x in banglaNumber) {
    str = str.replace(new RegExp(x, "g"), banglaNumber[x]);
  }
  return str;
};

function getLeapYearDays(year){
    if(year%400 == 0 || (year % 100 != 0 && year % 4 == 0)){
        return 29;
    }else{
        return 28;
    }
}



// Checking If Project Created or not
if(!localStorage.getItem("days")){
    // Project Not Exist. Show Create Project Dialog
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".dialog_new_project_details").classList.add("dialog-open");
}else{
    // Project Exist. Fillup all fields
    let days = localStorage.getItem("days");

    document.querySelector("title").textContent = localStorage.getItem("fileName");

    ["monthName", "year", "signatureDate"].forEach(function(e){
        document.querySelector(`input[data-target=${e}]`).value = localStorage.getItem(e);
        document.querySelectorAll(`span[data-target=${e}]`).forEach(el=>{
            el.textContent = localStorage.getItem(e);
        });
    });

    let customizePanelProgramScheduleMarkup = ``;
    let programScheduleMarkup = ``;

    for(i=1; i<=days; i++){
        let daysData = JSON.parse(localStorage.getItem("day_" + i));

        customizePanelProgramScheduleMarkup += `<div class="date_section">
        <div class="title d-flex justify-space-between align-center">
            <span>${daysData[0]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="17" viewBox="0 0 491.996 491.996">
                <path
                    d="m484.132 124.986-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z"
                />
            </svg>
        </div>
        <div class="content" data-target-location="day_${i}">
            <div class="single_field d-flex flex-column">
                <span class="field_name">ইউনিয়ন</span>
                <div class="d-flex align-center">
                    <input type="text" class="field" value="${daysData[1]}" data-target-index="2"/>
                    <select>
                        <option></option>
                        <option>মোঃপুর</option>
                    </select>
                </div>
            </div>
            <div class="single_field d-flex flex-column">
                <span class="field_name">ওয়ার্ড নং</span>
                <div class="d-flex align-center">
                    <input type="text" class="field" value="${daysData[2]}" data-target-index="3"/>
                    <select>
                        <option></option>
                        <option>১</option>
                        <option>৩</option>
                    </select>
                </div>
            </div>
            <div class="single_field d-flex flex-column">
                <span class="field_name">গ্রাম/পাড়ার নাম</span>
                <div class="d-flex align-center">
                    <input type="text" class="field" value="${daysData[3]}" data-target-index="4"/>
                    <select>
                        <option></option>
                        <option>সাপ্তাহিক সভা</option>
                        <option>রিপোর্ট প্রদান</option>
                        <option>অফিসে কাজ</option>
                        <option>সরকারি ছুটি</option>
                        <option>উ:মো:পুর</option>
                        <option>দোঘর</option>
                        <option>মলয়</option>
                        <option>লক্ষিপুর</option>
                        <option>শায়েস্তানগর CC</option>
                        <option>HA দের সাথে মাসিক সভা</option>
                        <option>CHCP দের সাথে মাসিক সভা</option>
                        <option>শায়েস্তানগর CC পরিদর্শন</option>
                        <option>পিপিয়াকান্দি CC পরিদর্শন</option>
                        <option>শায়েস্তানগর CC তে কমিউনিটি গ্রুপের মাসিক সভা পরিদর্শন</option>
                        <option>পিপিয়াকান্দি CC তে কমিউনিটি গ্রুপের মাসিক সভা পরিদর্শন</option>
                    </select>
                </div>
            </div>
            <div class="single_field d-flex flex-column">
                <span class="field_name">টিকাদান কেন্দ্রের নাম</span>
                <div class="d-flex align-center">
                    <input type="text" class="field" value="${daysData[4]}" data-target-index="5"/>
                    <select>
                        <option></option>
                        <option>UHC</option>
                        <option>IPC</option>
                        <option>FWC</option>
                        <option>EPI</option>
                        <option>EPI ডা সিরাজুল ইসলামের বাড়ী</option>
                        <option>EPI বিরেন্দ্র বর্মনের বাড়ী</option>
                        <option>EPI জাকির ভূইয়ার বাড়ী</option>
                        <option>EPI খোরশেদ ভূইয়ার বাড়ী</option>
                        <option>EPI বিল্লাল ভূইয়ার বাড়ী</option>
                        <option>EPI মোস্তফা মোল্লার বাড়ী</option>
                    </select>
                </div>
            </div>
            <div class="single_field d-flex flex-column">
                <span class="field_name">ব্লক</span>
                <div class="d-flex align-center">
                    <input type="text" class="field" value="${daysData[5]}" data-target-index="6"/>
                    <select>
                        <option></option>
                        <option>ক/১</option>
                        <option>ক/২</option>
                        <option>খ/১</option>
                        <option>খ/২</option>
                        <option>গ/১</option>
                        <option>গ/২</option>
                        <option>ঘ/১</option>
                        <option>ঘ/২</option>
                    </select>
                </div>
            </div>
        </div>
    </div>`;

        programScheduleMarkup += `<tr data-location="day_${i}">
                                    <td>${daysData[0]}</td>
                                    <td>${daysData[1]}</td>
                                    <td>${daysData[2]}</td>
                                    <td>${daysData[3]}</td>
                                    <td>${daysData[4]}</td>
                                    <td>${daysData[5]}</td>
                                    <td></td>
                                </tr>`;
    }

    document.querySelector(".customize_contentEdit_wrapper .section:nth-of-type(2) .section_content").innerHTML = customizePanelProgramScheduleMarkup;
    document.querySelector(".program_schedule table").insertAdjacentHTML("beforeend", programScheduleMarkup);
}



// Project Date Picker
jSuites.calendar(document.getElementById('calendar'), {
    type: 'year-month-picker',
    format: 'MMM-YYYY',
});

// Onclick Overlay hide Dialog
document.querySelector(".overlay").addEventListener("click", function(){
    if(!this.classList.contains("show") || document.querySelector(".dialog_new_project_details").classList.contains("dialog-open")) return;
    this.classList.remove("show");
    document.querySelector(".dialog_project_create").classList.remove("dialog-open");
    document.querySelector(".sticky_options_wrapper").classList.remove("show");
});

// Sticky Option Choose
document.querySelector(".sticky_options_wrapper .toggleBtn").addEventListener("click", function(){
    document.querySelector(".overlay").classList.toggle("show");
    this.parentElement.classList.toggle("show");
});

// Customize Option
document.querySelector(".customizeBtn").addEventListener("click", function(){
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".sticky_options_wrapper").classList.remove("show");

    document.querySelector(".customizeBar_wrapper").classList.add("sidebar-open");
});

// Print Functionality
document.querySelector(".printBtn").addEventListener("click", function(){
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".sticky_options_wrapper").classList.remove("show");

    setTimeout(function(){
        window.print();
    }, 1000);
});

// Create New Project
document.querySelector(".createNewBtn").addEventListener("click", function(){
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".dialog_project_create").classList.add("dialog-open");
});

document.querySelector(".projectCreateBtn").addEventListener("click", function(){
    let calendar = document.querySelector("input#calendar").value.trim().split("-");
    let today = new Date();

    let signatureDate = getBnNum(('0' + today.getDate()).slice(-2) + "/" + ('0' + (today.getMonth()+1)).slice(-2) + "/" + today.getFullYear());
    let month = calendar[0];
    let year = parseInt(calendar[1]);
    let days = month == "Feb" ? getLeapYearDays(year) : monthList[month].days;
    let monthName = monthList[month].name;
    let datePrefix = `/${getBnNum(monthList[month].numericBn)}/${getBnNum(calendar[1].slice(2,4))}`;
    let fileName = `Program ${monthList[month].fullName} ${year}`;

    // Clear Storage
    localStorage.clear();

    // Saving data into Local Storage
    localStorage.setItem("fileName", fileName);
    localStorage.setItem("signatureDate", signatureDate);
    localStorage.setItem("days", days);
    localStorage.setItem("monthName", monthName);
    localStorage.setItem("year", getBnNum(year.toString()));

    for(i=1; i <= days; i++){
        let date = getBnNum(i.toString()).concat(datePrefix);
        let isFriday = new Date(year, monthList[month].numeric, i).getDay() == 5 ? true : false;
        let text = isFriday ? "শুক্রবার" : "";

        localStorage.setItem("day_" + i, `["${date}", "", "", "${text}", "", ""]`);
    }

    location.reload();
});

// 
document.querySelector(".dialog_project_create .acceptBtn").addEventListener("click", function(){
    document.querySelector(".dialog_project_create").classList.remove("dialog-open");
    document.querySelector(".dialog_new_project_details").classList.add("dialog-open");
});

// Cancel New Project
document.querySelector(".dialog_project_create .cancelBtn").addEventListener("click", function(){
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".dialog_project_create").classList.remove("dialog-open");
});


// Collapse Customize Sidebar
document.querySelector(".customizeBar_wrapper .customize_titleBar .closeBtn").addEventListener("click", function(){
    document.querySelector(".customizeBar_wrapper").classList.remove("sidebar-open");
});


// Program Schedule Date-wise Toggle
document.querySelectorAll(".date_section .title").forEach(el=>{
    el.addEventListener("click", function(){
        if(this.parentElement.classList.contains("toggle-open")){
            this.parentElement.classList.remove("toggle-open");
        }else{
            document.querySelectorAll(".date_section .title").forEach(el=>{
                el.parentElement.classList.remove("toggle-open");
            });

            this.parentElement.classList.add("toggle-open");
        }
    });
});

// Update Filled Data into Table and Storage
document.querySelectorAll(".date_section .field").forEach(el=>{
    el.addEventListener("keyup", function(){
        let targetLocation = this.parentElement.parentElement.parentElement.getAttribute("data-target-location");
        let targetIndex = this.getAttribute("data-target-index");

        let storedData = JSON.parse(localStorage.getItem(targetLocation));
        storedData[targetIndex-1] = this.value;

        document.querySelector(`.program_schedule tr[data-location=${targetLocation}] td:nth-of-type(${targetIndex})`).textContent = this.value;
        localStorage.setItem(targetLocation, JSON.stringify(storedData));
    });
});

// Update Signature Field filled Data into Storage
document.querySelector(".signatureField").addEventListener("keyup", function(){
    document.querySelectorAll(`span[data-target=signatureDate]`).forEach(el=>{
        el.textContent = this.value;
    });

    localStorage.setItem("signatureDate", this.value);
});

// Fill Data OnPaste Value
document.querySelectorAll(".date_section .field").forEach(el=>{
    el.addEventListener("paste", function(){
        setTimeout(()=>{
            el.dispatchEvent(new Event("keyup"));
        }, 50);
    });

    el.addEventListener("cut", function(){
        setTimeout(()=>{
            el.dispatchEvent(new Event("keyup"));
        }, 50);
    });
});

// Fill Data from Dropdown Option
document.querySelectorAll(".date_section select").forEach(el=>{
    el.addEventListener("change", function(){
        this.parentElement.querySelector("input").value = this.value;
        this.parentElement.querySelector("input").dispatchEvent(new Event("keyup"));
    });
});