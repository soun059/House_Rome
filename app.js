let container = document.querySelector(".container");

const response = [
  {
    email: "1705886@kiit.ac.in",
    name: "Soujanna Dutta",
    hometown: "Kolkata",
    hobby: "Reading, Playing Video Games",
    skills: "Data Analysis ,React, Flask and Node Js dev",
    romanChar: "Gaius Octavius",
    quotes: "Make your mind like water.",
    image: "images/1.jpg",
  },
  {
    email: "riturajbanerjee.1999.rb@gmail.com",
    name: "Rituraj Banerjee",
    hometown: "Kolkata",
    hobby: "Playing Tennis, watching football, photography, sketching",
    skills: "C, Java, UX design",
    romanChar: "Julius Caesar",
    quotes: "Keep it simple, keep it real",
    image: "images/2.jpg",
  },

  {
    email: "1705885@kiit.ac.in",
    name: "Sayantan Ghosh",
    hometown: "Kalna",
    hobby: "Sketching",
    skills: "Machine learning",
    romanChar: "Julius Caesar",
    quotes: "Keep Clam and Stay Cool",
    image: "images/3.jpg",
  },

  {
    email: "1706072@kiit.ac.in",
    name: "Riya Singh",
    hometown: "Lucknow",
    hobby: "Swimming, painting",
    skills: "Java, C, DBMS, Cloud Computing, Machine Learning",
    romanChar: "Trajan",
    quotes: "A fool is one who admires other cities wihout visiting Rome",
    image: "images/4.jpg",
  },
  {
    email: "1704168@kiit.ac.in",
    name: "Ankita Dutta",
    hometown: "Kolkata",
    hobby: "Listening songs,collecting coins,singing",
    skills: "Singing,computer networking",
    romanChar: "Cleopatra",
    quotes: "Be the change you want to see in the world",
    image: "images/5.jpg",
  },
  {
    email: "1707269@kiit.ac.in",
    name: "Debasish Nayak",
    hometown: "Brahmapur",
    hobby: "Playing chess ,sketching  and listening Sunday suspense ",
    skills: "3D cad modelling, PLC ladder operation ",
    romanChar: "Alexander",
    quotes: "",
    image: "images/6.jpg",
  },
  {
    email: "1705682@kiit.ac.in",
    name: "Archisman Bhattacharyya",
    hometown: "Gwalior",
    hobby: "Photographer",
    skills: "Photographer",
    romanChar: "Hadas",
    quotes: "I had rather be first in a village than second at Rome",
    image: "images/7.jfif",
  },
  {
    email: "1705688@kiit.ac.in",
    name: "Basundhara kumar",
    hometown: "Kolkata",
    hobby: "Painting",
    skills: "Machine learning,cloud technology",
    romanChar: "Remus",
    quotes: "Shoot for the moon .even if you miss you so land among stars.",
    image: "images/8.jpg",
  },
  {
    email: "1705672@kiit.ac.in",
    name: "Avinash Mallik",
    hometown: "Siddharthanagar",
    hobby: "Drawing",
    skills: "Web Development ",
    romanChar: "Hercules",
    quotes:
      "The moment you think of giving up, think of the reason why you held on so long. ",
    image: "images/9.png",
  },
  {
    email: "1729086@kiit.ac.in",
    name: "Swapnil Bhattacharya",
    hometown: "Kolkata",
    hobby: "listening to music,travelling",
    skills: "web development,machine learning",
    romanChar: "Mark Antony(from William Shakespeare's  play Julius Caesar)",
    quotes:
      "Rome will exist as long as the Coliseum does; when the Coliseum falls, so will Rome; when Rome falls, so will the world.",
    image: "images/10.jpeg",
  },
  {
    email: "aryabratas3arya@gmail.com",
    name: "Aryabrata Sahoo",
    hometown: "BHUBANESWAR",
    hobby: "Driving, Traveling,exploring new technologies",
    skills: "proficiency in Embedded Systems,Internet of things.",
    romanChar: "Mars, The god of War",
    quotes: "",
    image: "images/11.jpg",
  },
  {
    email: "1704178@kiit.ac.in",
    name: "Avishek Goswami",
    hometown: "Bankura",
    hobby: "Playing Football Reading books",
    skills: "Machine learning, cloud computing",
    romanChar: "Morta",
    quotes: "",
    image: "images/12.jpg",
  },
  {
    email: "1705584@kiit.ac.in",
    name: "Apurva Parasar ",
    hometown: "Patna, Bihar",
    hobby: "My hobby is to draw and paint.traveling",
    skills: "1.Political and general awareness",
    romanChar: "Julius Caesar",
    quotes: "",
    image: "images/13.jpg",
  },
  {
    email: "1705533@kiit.ac.in",
    name: "Saurabh Dubey",
    hometown: "Ranchi,Jharkhand",
    hobby: "Playing chess",
    skills: "C,Java",
    romanChar: "Zeus",
    quotes:
      "Rome as they say wasn't built in a day,You see the warriors always make their way.",
    image: "images/14.jpg",
  },
  {
    email: "1706031@kiit.ac.in",
    name: "Ashutosh Verma",
    hometown: "Bhagalpur",
    hobby: "Singing, Reading, Writing",
    skills: "Web Development, C++",
    romanChar: "Constantine",
    quotes: "When in Rome, do like Romans do.",
    image: "images/15.jpg",
  },
  {
    email: "1729192@kiit.ac.in",
    name: "ANAND KUMAR SAHAY",
    hometown: "Muzaffarpur",
    hobby: "Drawing",
    skills: "Competitive Coder",
    romanChar: " Artemis",
    quotes: "A learning enthusiast who is trying to be an ambivert.",
    image: "images/16.PNG",
  },
  {
    email: "1708094@gmail.com",
    name: "Prasom Saha",
    hometown: "Kolkata",
    hobby: "Content Creation And Photo Manipulation",
    skills: "Photography",
    romanChar: "Trajan",
    quotes: "Developing the unexposed film called life :)",
    image: "images/17.jfif",
  },
  {
    email: "1704179@kiit.ac.in",
    name: "Bishal Kumar Ghosh",
    hometown: "Kolaghat,East Midnapore,721171",
    hobby: "Playing Guitar, Gaming",
    skills: "Machine Learning,Cloud Computing",
    romanChar: "Vulcan",
    quotes: "Dream It to Make It",
    image: "images/18.jpg",
  },
  {
    email: "1728163@kiit.ac.in",
    name: "Supratim Sircar",
    hometown: "Cuttack",
    hobby: "Competitive Programming",
    skills: "Programming",
    romanChar: "Julius Caesar",
    image: "images/19.jpg",
    quotes: "Nothing worthwhile is achieved without deep thought and hardwork.",
  },
  {
    email: "1705299@kiit.ac.in",
    name: "Avinash Singh",
    hometown: "Varanasi",
    hobby: "Listening Music,Poem Writing",
    skills: "Public Speaking, Data Science",
    romanChar: "Spartacus",
    image: "images/20.jpeg",
    quotes: "Say not always what you know, but always know what you say.",
  },
  {
    email: "1704069@kiit.ac.in",
    name: "Sukanya Goswami",
    hometown: "Kolkata",
    hobby: "Binge watching TV series, baking",
    skills: "Analytical thinking, fast learning, team work",
    romanChar: "Julius Caesar",
    image: "images/21.jpg",
    quotes:
      " What we wish, we readily believe, and what we ourselves think, we imagine others think also.",
  },
  {
    email: "1729127@kiit.ac.in",
    name: "DIVYA ANAND",
    hometown: "Patna",
    hobby: "Horse Riding, Swimming",
    skills: "Full stack developer, team worker, ",
    romanChar: "Anthony",
    image: "images/22.jpg",
    quotes: "",
  },
  {
    email: "1706343@kiit.ac.in",
    name: "PRANAV  OJHA",
    hometown: "GUNA",
    hobby:
      " I love Playing games, watching football , reading books , novels and newspapers.",
    skills: "Unity c#, php , Android . ",
    romanChar: "Odin",
    image: "images/23.PNG",
    quotes: "Your life is what your thoughts make it.",
  },
  {
    email: "1704557@kiit.ac.in",
    name: "Soumik Sen",
    hometown: "Kolkata",
    hobby: "Playing games, Football, Swimming",
    skills: "Graphic Designer, Photographer",
    romanChar: "Saturn",
    image: "images/24.jpg",
    quotes: "Justice  would not be denied nor doubted but accepted.",
  },
  {
    email: "bsspranathi@gmail.com",
    name: "Pranathi Bhogaraju",
    hometown: "Rajahmundry (A.P.)",
    hobby: "reading books, writing stories ",
    skills: "singing,sketching and painting and cooking. ",
    romanChar: "Apollo ",
    image: "images/25.jpg",
    quotes:
      'If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good." - Buddha.',
  },
  {
    email: "1704384@kiit.ac.in",
    name: "Shashank Subhra",
    hometown: "Bhubaneswar",
    hobby: "Occasional Writing.Hindi/English Retro Songs.Mozart and Beethoven.",
    skills: "Some technical skills and writing.",
    romanChar: "Brutus",
    image: "images/26.jpeg",
    quotes: "Life itself is a quotation. ",
  },
  {
    email: "1706364@kiit.ac.in",
    name: "Shreeja Shrimayee",
    hometown: "Dhanbad, Jharkhand",
    hobby: "Painting and reading",
    skills: "Android developer , Machine learning",
    romanChar: "Augustus",
    image: "images/27.jpg",
    quotes: "Say not always what you know , but always know what you say",
  },
  {
    email: "1706411@kiit.ac.in",
    name: "DIKSHA KUMARI",
    hometown: "BHAGALAPUR, BIHAR",
    hobby: "I love to play badmintion",
    skills: "Active listening,decision making & creativity ",
    image: "images/28.jpg",
    romanChar: "MARCUS JUNIUS BRUTUS",
    quotes: "",
  },
  {
    email: "1730174@kiit.ac.in",
    name: "Raunak Kanodia",
    hometown: "Kolkata",
    hobby: "Reading, Sports and Travelling",
    image: "images/29.jpg",
    skills: "Internet of Things, Java, Competitive Programming",
    romanChar: "Constantine",
    quotes: "",
  },
  {
    email: "1705635@kiit.ac.in",
    name: "Shreya Sharma ",
    hometown: "Indore ",
    hobby: "Still life sketching ",
    skills: "Perseverance and motivation",
    romanChar: "Augustus ",
    image: "images/30.jpg",
    quotes: "Believe in yourself!!!! ",
  },
  {
    email: "1730096@kiit.ac.in",
    name: "Devraj Sahu",
    hometown: "Bhila",
    hobby: "Programming, playing soccer & cricket",
    skills: "C, C++, Python, DSA, Web Development, SQL",
    romanChar: "Alexander",
    image: "images/31.jpeg",
    quotes:
      "Believe passionately in what you do, and never knowingly compromise your standards and values",
  },
  {
    email: "1728244@kiit.ac.in",
    name: "Shivam Kumar",
    hometown: "Nawada",
    hobby: "Cooking, swimming",
    skills: "Problem-solving, Critical Thinking ",
    romanChar: "Julius Caesar",
    image: "images/32.jpg",
    quotes: "",
  },
  {
    email: "1705547@kiit.ac.in",
    name: "Shristi Agrawalla",
    hometown: "Puri",
    hobby: "Dancing, Cooking, Voracious Reader",
    skills: "C, C++, Java, Web Development",
    image: "images/33.jpg",
    romanChar: "Augustus",
    quotes: "",
  },
  {
    email: "1729099@kiit.ac.in",
    name: "Aditya Mohanty",
    hometown: "Bhubaneswar",
    hobby: "reading,painting,photography",
    skills: "Can eat a large pizza alone and then sleep for the longest time.",
    romanChar: "Venus",
    image: "images/34.png",
    quotes: "Idk. Live, laugh, love maybe.",
  },
  {
    email: "1705831@kiit.ac.in",
    name: "Hardeek Paudel",
    hometown: "Kathmandu, Nepal",
    hobby: "Painting, Playing football, Playing Guitar",
    skills: "Ability to work under pressure",
    romanChar: "Hercules",
    image: "images/35.JPG",
    quotes: "If opportunity doesn't knock, build a door",
  },
  {
    email: "1706344@kiit.ac.in",
    name: "Pranay Kumar Raj",
    hometown: "Asansol",
    hobby: "Social Service,Listening Music",
    skills: "Java Developer",
    romanChar: "Julius Caesar",
    image: "images/36.jpeg",
    quotes: "The secret of getting ahead is getting started",
  },
  {
    email: "1706040@kiit.ac.in",
    name: "Himanshu",
    hometown: "Arah",
    hobby: "Cycling, Writing",
    skills: "Competitive Coding, Problem Solving",
    romanChar: "Spartacus",
    image: "images/37.jpg",
    quotes: "Make some difference to prove the worth of your existence!",
  },
  {
    email: "1705889@kiit.ac.in",
    name: "Shreya Banerjee",
    hometown: "Kolkata, West Bengal",
    hobby: "Painting, Reading Thrillers, Solving crosswords and Travelling",
    skills: "Debugging, Problem Solving, Team player ",
    romanChar: "Antigone",
    image: "images/38.jpg",
    quotes: "Grow through what you go through",
  },
  {
    email: "bishmays@gmail.com",
    name: "Bishmay Ranjan Sahoo",
    hometown: "Dhenkanal",
    hobby: "Gaming",
    image: "images/39.jpeg",
    skills: "Coding, Data Analysis and Machine Learning enthusiastic.",
    romanChar: "Cicero",
    quotes: "",
  },
  {
    email: "1705078@kiit.ac.in",
    name: "Sidharth Purohit",
    hometown: "Jaipur",
    image: "images/40.jpg",
    hobby: "Mathematics , programming , cricket ,music",
    skills: "Research aptitude",
    romanChar: "Fibonacci",
    quotes: "The quieter you become ,the more you can hear.",
  },
  {
    email: "1704392@kiit.ac.in",
    name: "Spandan Dhar",
    hometown: "Malda, West Bengal",
    hobby: "Cricket, Piano playing, Music Composing",
    skills:
      "Good programming skills on C and Data Structure, Good Communication Skill,Good Situation Handler",
    romanChar: "Augustus Ceaser",
    image: "images/41.jpg",
    quotes:
      "To the engineer,the glass is twice as big as it needs to be and I truly believe in it. Smiling face with adequate knowledge always make everyone Perfect",
  },
  {
    email: "1705336@kiit.ac.in",
    name: "Nilanjana Sen Gupta",
    hometown: "Kolkata",
    hobby: "Reading, watching films",
    skills: "Singing, coding",
    image: "images/43.jpg",
    romanChar: "Minerva",
    quotes:
      "The greatest act of faith some days is to simply get up and face another day",
  },
  {
    email: "1706413@kiit.ac.in",
    name: "Gitartha Bordhan Bora",
    hometown: "Nagoan,Assam",
    image: "images/44.jpg",
    hobby: "Playing football,e-games,music,hotwheels collection",
    skills: "C/C++,Writing Articles,Drawing",
    romanChar: "Julius Ceaser",
    quotes:
      "Rome is not like any other city. It\u2019s a big museum, a living room that shall be crossed on one\u2019s toes",
  },
  {
    email: "1705183@kiit.ac.in",
    name: "Tushar Ad",
    hometown: "Ranchi",
    image: "images/45.jpeg",
    hobby: "Watching and playing cricket, swimming and travelling.",
    skills: "Competitive programming, DS & ALGO, Web-Backend",
    romanChar: "Julius Caesar",
    quotes: "Enthusiastic Leaner who lives life to the fullest :)",
  },
  {
    email: "1705948@kiit.ac.in",
    name: "Anshika Rai",
    hometown: "Jamshedpur",
    image: "images/46.jpg",
    hobby: "Watching movies, listening music, travelling, Dog sitting",
    skills: "Creativity Time management Adaptability,Critical thinking",
    romanChar: "Juno",
    quotes: "Positivity is the key to happiness",
  },
  {
    email: "1705355@kiit.ac.in",
    name: "Saksham Rawat",
    hometown: "JABALPUR",
    image: "images/47.jpg",
    hobby: "to know about latest technology and cars, to do diy hacks",
    skills: "Compitative coding, Football, army drills",
    romanChar: "Domitian",
    quotes:
      "\u201cPerform your obligatory duty, because action is indeed better than inaction.\u201d",
  },
  {
    email: "1705450@kiit.ac.in",
    name: "Sandeep Kumar Sahoo",
    hometown: "Dhenkanal, Odisha",
    hobby: "strategical gameplay and Rubik's cube",
    skills: "My special magical Maggie dish. excell in new things.",
    romanChar: "Aristotle",
    image: "images/48.jpg",
    quotes: "Remove any doubts from your head , It's us or them",
  },
  {
    email: "doyelsaha99@gmail.com",
    name: "Doyel Saha",
    hometown: "West Bengal",
    hobby: "Painting",
    skills: "Android, Flutter,Python,ML",
    romanChar: "Augustus Caesar",
    image: "images/49.jpg",
    quotes: "The price of success is hard work",
  },
  {
    email: "1707167@kiit.ac.in",
    name: "Abhijeet",
    hometown: "Bokaro Steel City",
    hobby:
      "Travelling, weightlifting, cooking, Netflix-ing, enjoy music, driving",
    skills: " programming,embedded systems, IoT,PLC, team work",
    image: "images/50.jpg",
    romanChar: " 'gladiator' ",
    quotes: "",
  },
  {
    email: "1706576@kiit.ac.in",
    name: "Aayush Kumar",
    hometown: "Bhagalpur",
    hobby: "Traveling",
    skills: "Tech Background",
    image: "images/51.jpg",
    romanChar: "Julius caesar",
    quotes: "",
  },
  {
    email: "1705365@kiit.ac.in",
    name: "Shreyanshi Gupta",
    hometown: "Varanasi, UP",
    hobby: "Dancing, travelling, Binge watching",
    skills: "Active listening, Communication,",
    romanChar: "Julius caesar",
    image: "images/52.jfif",
    quotes: "you get what you work for not what you wish for ",
  },
  {
    email: "1729160@kiit.ac.in",
    name: "Shambhavi Agrawal",
    hometown: "Lucknow",
    hobby: "Swimming,music, travelling",
    skills: "Problem solving, communication",
    romanChar: "Minerva",
    image: "images/53.jfif",
    quotes:
      "Don't be afraid of being different, be afraid of being same as everyone.",
  },
  {
    email: "1705592@kiit.ac.in",
    name: "Dibyanshu Singh",
    hometown: "Gopalganj",
    hobby: "Playing Cricket and Football , reading astronomy articles",
    skills:
      "Teamwork, Resilience, Responsibility, Adaptability,ML ,DSA ,C++,python",
    romanChar: "Augustus",
    image: "images/54.jfif",
    quotes: "",
  },
  {
    name: "Shrabani Dhal",
    email: "1707401@kiit.ac.in",
    hobby: "Singing , dancing and travelling",
    skills: "Internet of Things ,C++ and cloud computing",
    romanChar: "spartacus",
    image: "images/55.jfif",
    hometown: "Sambalpur, Odisha",
    quotes: "",
  },
  {
    name: "Gargee Banerjee",
    email: "1728060@kiit.ac.in",
    skills: "Cybersecurity",
    hobby: "Dancing & Creative art",
    quotes: "Being messy is not that bad.",
    image: "images/56.jfif",
    hometown: "Tinsukia",
    romanChar: "Augustus",
  },
  {
    email: "swadesh2710@gmail.com",
    name: "Swadesh Nayak",
    hometown: "MCL Basundhara",
    hobby: "Reading books and football",
    skills: "Cyber Security and cookin",
    romanChar: "Achilles",
    quotes: "It takes GRACE to remain kind in a cruel situation.",
    image: "images/57.jfif",
  },
  {
    email: "1706488@kiit.ac.in",
    name: "Animesh Kumar",
    hometown: "Khagaria",
    hobby: "Photography, Singing, Editing , Watching Documentaries",
    skills: "C++, Machine Learning, ",
    romanChar: "Trajan",
    quotes: "",
    image: "images/58.jpg",
  },
  {
    email: "1705005@kiit.ac.in",
    name: "Abhish Kumar Anand",
    hometown: "Bhagalpur",
    hobby: "Playing football, Playing games and learning new things.",
    skills: "Mathematical modelling, Programming ",
    romanChar: "Appollo",
    quotes:
      "Things turn out best for the people who make the best of the way things turn out.",
    image: "images/59.jpg",
  },
  {
    email: "1706580@kiit.ac.in",
    name: "Tamojit dutta",
    hometown: "jamshedpur",
    hobby: "football",
    skills: "C, Java, C++",
    romanChar: "Julius caesar",
    quotes:
      "There are many things that seem impossible only so long as one does not attempt them.",
    image: "images/60.jpg",
  },
];

const fetchUserDetails = async () => {
  //const response = await fetch("./_data.json");
  const data = await response;
  data.forEach((user) => {
    if (user.quotes.length != 0) {
      container.innerHTML += `
        <div class="card">
            <div class="imgBox">
                <img src=${user.image} class="avatar">
            </div>
            <div class="details">
                <h2 class="detail-head">${user.name}</h2>
                <div class="detain-body"><i class="fas fa-home fa-2x"></i> ${
                  user.hometown
                }<div>
                <div class="detain-body"><i class="fas fa-envelope-square fa-2x"></i> ${
                  user.email
                }</div>
                <div class="detain-body"><i class="fas fa-wrench fa-2x"></i> ${
                  user.skills
                }<div>
                <div class="detain-body"><i class="fab fa-angellist fa-2x"></i> ${
                  user.hobby
                }<div>
                <div class="detain-body"><i class="far fa-smile-wink fa-2x"></i> ${
                  user.romanChar
                }<div>
                <div class="detain-body"><i class="fas fa-quote-left "></i>${
                  " " + user.quotes
                }</p>
            </div>
       </div>
        `;
    } else {
      container.innerHTML += `
        <div class="card">
            <div class="imgBox">
                <img src=${user.image} class="avatar">
            </div>
            <div class="details">
                <h2 class="detail-head">${user.name}</h2>
                <div class="detain-body"><i class="fas fa-home fa-2x"></i> ${user.hometown}<div>
                <div class="detain-body"><i class="fas fa-envelope-square fa-2x"></i> ${user.email}</div>
                <div class="detain-body"><i class="fas fa-wrench fa-2x"></i> ${user.skills}<div>
                <div class="detain-body"><i class="fab fa-angellist fa-2x"></i> ${user.hobby}<div>
                <div class="detain-body"><i class="far fa-smile-wink fa-2x"></i> ${user.romanChar}<div>
            </div>
       </div>
        `;
    }
  });
};

fetchUserDetails();
