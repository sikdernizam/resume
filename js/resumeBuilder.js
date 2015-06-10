var bio  = {
	"name" : "Nizam Uddin GM Sikder",
	"role" : "Junior Web Developer",
	"contacts" : {
		"mobile" : "+8801715878923",
		"email" : "nishatsikder@hotmail.com",
		"github" : "github.com/tahsinctg",
		"twitter" : "twitter.com/nizam.sikder",
		"location": "Mirpur, Dhaka"
	},
	"welcomeMessage" : "A self-motivated learner who is very much passionate to achieve new technical knowledge and skills. I am able to establish, maintain and develop effective working relationships with service users, operational teams, delivery partners and colleagues. I possess a broad range of technical, professional effectiveness and leadership skills and uses rigorous logic and methods to come up with effective solutions to difficult problems. I am looking to secure a position in an IT Company where I can bring immediate and strategic value and develop my current skillset further",
	"skills" : ["Web Design and Development", "Database Design", "System Analysis", "Requirement Analysis"],
	"bioPic" : "images/me.jpg"
};
bio.display = function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName+formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedContact = formattedMobile+formattedEmail+formattedGithub+formattedTwitter+formattedLocation;
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
		$("#header").append(formattedPic);		

		var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedMessage);		

		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills);
		}
		$("#skills").append(formattedSkills);		
}
bio.display();
var education = {
	"schools" : 
	[
		{
			"name" : "International Islamic University Chittagong (IIUC)",
			"location" : "Chawkbazar, Chittagong",
			"degree" : "B.Sc in CSE",
			"majors" : ["Computer Science", "Mathematics", "Physics", "Electrical Engineering"],
			"dates" : "2008-2012",
			"url" : "http://iiuc.ac.bd"
		},
		{
			"name" : "BGC Academy School and College",
			"location" : "BGC Vidyanagar, Roushanhat, Chittagong",
			"degree" : "HSC",
			"majors" : ["Physics","Chemistry","Mathematics"],
			"dates" : "2006-2007",
			"url" : "http://bgc.edu.bd"
		},
		{
			"name" : "Rashid Ahmed Chy High School",
			"location" : "Fashiakhali, Chakaria",
			"degree" : "SSC",
			"majors" : ["Physics", "Mathematics", "Chemistry"],
			"dates" : "2005-2006",
			"url" : "http://rac.edu.bd"
		}
	],
	"onlineCourses" : 
	[
		{
			"title" : "PHP, MySQL Essential Training",
			"school" : "Lynda.com",
			"date" : "2010",
			"url" : "http://lynda.com"
		},
		{
			"title" : "PHP, MySQL beyond the basics",
			"school" : "Lynda.com",
			"date" : "2010",
			"url" : "http://lynda.com"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Uacity",
			"date" : "2015",
			"url" : "https://udacity.com"
		}
	]
	
};
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		var schoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(schoolName+schoolDegree+schoolDates+schoolLocation+schoolMajor);	
	}
}
education.display();

var work = {
	"jobs" : [
		{
			"employer" : "Liveoutsource Limited",
			"title" : "Junior Web Developer",
			"location" : "Nikunja, Khilket",
			"dates" : "2014",
			"description" : "1. Web application design and development specially with cakePHP framework.<br>2. Plan, coordinate and conduct software engineering activities.<br>3. Create and participate in software planning and estimating, status monitoring and reporting"},
		{
			"employer" : "Syscare Limited",
			"title" : "Software Support Engineer",
			"location" : "Chittagong",
			"dates" : "2015",
			"description" : "1. Requirement collection and provide technical supports to the clients.<br>2. Report Design with Crystal Report.<br>3. Software documentation.<br>4. Coordinate with Software Developer team in issues"
		},
		{
			"employer" : "HRSoft  Limited",
			"title" : "Web Developer",
			"location" : "Dhaka",
			"dates" : "2013",
			"description" : "1. Web design and development.<br>2. Customize web development.<br>3. Database management.<br>4. Requirement Collection and Implementation"
		}
	]
};
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var workEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var workTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var workDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var workLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var workDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(workEmployer + workTitle + workDates + workLocation + workDescription);
	}
}
work.display();

var project = {
	"projects": [
		{
			"title" : "Real Estate Management System",
			"dates" : "01-10-2012",
			"description" : "A CMS to manage real estate functionalities",
			"images" : "images/197x148.gif"
		},
		{
			"title" : "Hotel Management System",
			"dates" : "01-05-2012",
			"description" : "A CMS to manage real hotel and resturant functionalities",
			"images" : "images/197x148.gif"
		}
	]
};
project.display = function() {
	for(proj in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%",project.projects[proj].title);
		var projectDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%",project.projects[proj].description);
		var projectImage = HTMLprojectImage.replace("%data%",project.projects[proj].images);
		$(".project-entry:last").append(projectTitle + projectDates + projectDescription + projectImage);
	}
}
project.display();
// function inName(name){
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] + " " + name[1];
// }

$("#mapDiv").append(googleMap);
