interface ResumeData {
    name: string;
    email: string;
    phone: string;
    objective: string;
    education: string;
    workExperience: string;
    skills: string;
}

const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumePreview = document.getElementById('resume-preview') as HTMLElement | null;

if (form && resumePreview) {
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formData = new FormData(form);
        const resumeData: ResumeData = {
            name: formData.get('name')?.toString() || '',
            email: formData.get('email')?.toString() || '',
            phone: formData.get('phone')?.toString() || '',
            objective: formData.get('objective')?.toString() || '',
            education: formData.get('education')?.toString() || '',
            workExperience: formData.get('work-experience')?.toString() || '',
            skills: formData.get('skills')?.toString() || '',
        };

        const resumeHtml = `
            <h2>${resumeData.name}</h2>
            <p>${resumeData.email}</p>
            <p>${resumeData.phone}</p>
            <h3>Objective:</h3>
            <p>${resumeData.objective}</p>
            <h3>Education:</h3>
            <p>${resumeData.education}</p>
            <h3>Work Experience:</h3>
            <p>${resumeData.workExperience}</p>
            <h3>Skills:</h3>
            <p>${resumeData.skills}</p>
        `;

        resumePreview.innerHTML = resumeHtml;
    });
} else {
    console.error('Form or resume preview element not found');
}