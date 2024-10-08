
var form = document.getElementById('resume-form');
var resumePreview = document.getElementById('resume-preview');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        objective: formData.get('objective'),
        education: formData.get('education'),
        workExperience: formData.get('work-experience'),
        skills: formData.get('skills'),
    };
    var resumeHtml = "\n        <h2>".concat(resumeData.name, "</h2>\n        <p>").concat(resumeData.email, "</p>\n        <p>").concat(resumeData.phone, "</p>\n        <h3>Objective:</h3>\n        <p>").concat(resumeData.objective, "</p>\n        <h3>Education:</h3>\n        <p>").concat(resumeData.education, "</p>\n        <h3>Work Experience:</h3>\n        <p>").concat(resumeData.workExperience, "</p>\n        <h3>Skills:</h3>\n        <p>").concat(resumeData.skills, "</p>\n    ");
    resumePreview.innerHTML = resumeHtml;
});
