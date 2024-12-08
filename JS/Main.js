var siteDetails = {
    siteName: document.getElementById('newSiteName'),
    sitesNamesContainer: [],
    siteURL: document.getElementById('siteURL'),
    sitesURLContainer: []
};

function addSiteName() {
    var webName = siteDetails.siteName.value;
    if (webName) {
        siteDetails.sitesNamesContainer.push(webName);
        displayData();
        siteDetails.siteName.value = '';
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong site name",
          });
        siteDetails.siteName.value = '';
    }
}

function validateSiteName() {
    var regex = /^[a-zA-Z]{4,32}$/;
    if (!regex.test(siteDetails.siteName.value)) {
        siteDetails.siteName.classList.add('is-invalid');
        siteDetails.siteName.classList.remove('is-valid');
        return false;
    } else {
        siteDetails.siteName.classList.remove('is-invalid');
        siteDetails.siteName.classList.add('is-valid');
        return true;
    }
}

function addSiteURL() {
    var websiteURLInfo = siteDetails.siteURL.value;
    if (websiteURLInfo) {
        siteDetails.sitesURLContainer.push(websiteURLInfo);
        displayData();
        siteDetails.siteURL.value = '';
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid URL",
          });
        siteDetails.siteURL.value = '';
    }
}

function validateSiteURL() {
    var regex = /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/;
    if (!regex.test(siteDetails.siteURL.value)) {
        siteDetails.siteURL.classList.add('is-invalid');
        siteDetails.siteURL.classList.remove('is-valid');
        return false;
    } else {
        siteDetails.siteURL.classList.remove('is-invalid');
        siteDetails.siteURL.classList.add('is-valid');
        return true;
    }
}

function displayData() {
    var dataRow = ``;
    for (var i = 0; i < siteDetails.sitesNamesContainer.length; i++) {
        dataRow += `<tr class="fw-normal">
            <td>${i + 1}</td>
            <td>
                <span>${siteDetails.sitesNamesContainer[i]}</span>
            </td>
            <td>
                <button class="visit btn btn-success" onclick="visitURL(${i})"><i class="fa-solid fa-eye p2-2"></i>Visit</button>
            </td>
            <td>
                <button class="del btn btn-danger" onclick="deleteRow(${i})"><i class="fa-solid fa-trash-can pe-2 rounded-3 border-0 btn-danger"></i>Delete</button>
            </td>
            </tr>`;
    }
    document.getElementById('websiteNames').innerHTML = dataRow;
}

function deleteRow(index) {
    siteDetails.sitesNamesContainer.splice(index, 1);
    siteDetails.sitesURLContainer.splice(index, 1);
    displayData();
}

function visitURL(){
    var inputedURL = document.getElementById('siteURL')
    if(inputedURL.value){
        window.open(inputedURL.value, '_blank');
    }
}