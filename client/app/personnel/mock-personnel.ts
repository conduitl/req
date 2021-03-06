import { Person, Bio } from './person';

export const PERSONNEL: Person[] = [
    { 
        id: 151, 
        name: 'Alan B. Shepard, Jr.', 
        job: 'Astronaut', 
        joined: 1959, 
        group: 'Group 1',
        programs: ['Mercury', 'Apollo'],
        missions: ['MR-3', 'Apollo 14'], 
        img: '../../img/300x300/shepard.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Alan_Shepard'
    },
    { 
        id: 152, 
        name: 'Virgil I. Grissom', 
        job: 'Astronaut', 
        joined: 1959, 
        group: 'Group 1',
        programs: ['Mercury', 'Apollo'],
        missions: ['MR-4', 'Apollo 1'], 
        img: '../../img/300x300/grissom.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Gus_Grissom'
    },
    { 
        id: 153, 
        name: 'John H. Glenn, Jr.', 
        job: 'Astronaut', 
        joined: 1959, 
        group: 'Group 1',
        programs: ['Mercury'],
        missions: ['MA-6','STS-95'], 
        wiki: 'https://en.wikipedia.org/wiki/John_Glenn',
        img: '../../img/300x300/glenn.jpg'  
    },
    { 
        id: 154, 
        name: 'M. Scott Carpenter', 
        job: 'Astronaut', 
        joined: 1959, 
        group: 'Group 1',
        programs: ['Mercury'],
        missions: ['MA-7'], 
        wiki: 'https://en.wikipedia.org/wiki/Scott_Carpenter',
        img: '../../img/300x300/carpenter.jpg'  
    },
    { 
        id: 155, 
        name: 'Walter M. Schirra, Jr.', 
        job: 'Astronaut', joined: 1959, 
        group: 'Group 1',
        programs: ['Mercury', 'Apollo', 'Gemini'],
        missions: ['MA-8', 'Gemini 6A', 'Apollo 7'], 
        img: '../../img/300x300/schirra.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Wally_Schirra'
    },
    { 
        id: 156, 
        name: 'L. Gordon Cooper, Jr.', 
        job: 'Astronaut', 
        joined: 1959, 
        group: 'Group 1',
        programs: ['Mercury', 'Apollo'],
        missions: ['MA-9'], 
        wiki: 'https://en.wikipedia.org/wiki/Gordon_Cooper',
        img: '../../img/300x300/cooper.jpg' },
    { 
        id: 158, 
        name: 'Neil A. Armstrong', 
        job: 'Astronaut', 
        joined: 1962, 
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 8', 'Apollo 11'], 
        img: '../../img/300x300/armstrong.jpg' 
    },
    { 
        id: 159, 
        name: 'Frank Borman', 
        job: 'Astronaut', 
        joined: 1962, 
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 7', 'Apollo 8'], 
        img: '../../img/300x300/borman.jpg' 
    },
    { 
        id: 160, 
        name: 'Charles "Pete" Conrad', 
        job: 'Astronaut', 
        joined: 1962, 
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 5', 'Gemini 11', 'Apollo 12', 'Skylab 2'], 
        img: '../../img/300x300/conrad.jpg' 
    },
    { 
        id: 161, 
        name: 'James A. Lovell', 
        job: 'Astronaut', 
        joined: 1962, 
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 7', 'Gemini 12', 'Apollo 8', 'Apollo 13'], 
        img: '../../img/300x300/lovell.jpg' 
    },
    { 
        id: 162, 
        name: 'James A. McDivitt', 
        job: 'Astronaut', 
        joined: 1962, 
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 4', 'Apollo 9'] 
    },
    { 
        id: 163, 
        name: 'Thomas P. Stafford', 
        job: 'Astronaut', 
        joined: 1962, 
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 6A', 'Gemini 9A','Apollo 10'] 
    },
    { 
        id: 164, name: 'Edward H. White', job: 'Astronaut', joined: 1962, group: 'Group 2',
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 4', 'Apollo 1']
    },
    { 
        id: 165, name: 'John W. Young', job: 'Astronaut', joined: 1962, group: 'Group 2',
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 3', 'Gemini 10', 'Apollo 10', 'Apollo 16', 'STS-1', 'STS-9']
    },
    { 
        id: 166, name: 'Edwin "Buzz" Aldrin', job: 'Astronaut', joined: 1963, group: 'Group 3',
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 12', 'Apollo 11']    
    },
    { 
        id: 167, name: 'Eugene A. Cernan', job: 'Astronaut', joined: 1963, group: 'Group 3',
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 9A', 'Apollo 10', 'Apollo 17'] 
    },
    { 
        id: 168, name: 'Michael Collins', 
        job: 'Astronaut', 
        joined: 1963, 
        group: 'Group 3',
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 10', 'Apollo 11']
    },
    { 
        id: 169, 
        name: 'Richard F. Gordon', 
        job: 'Astronaut', 
        joined: 1963, 
        group: 'Group 3',
        programs: ['Gemini', 'Apollo'],
        missions: ['Gemini 11', 'Apollo 12']
     },
    { 
        id: 170, 
        name: 'David R. Scott', 
        job: 'Astronaut', 
        joined: 1963, 
        group: 'Group 3',
        programs: ['Gemini', 'Apolo'],
        missions: ['Gemini 8', 'Apollo 9', 'Apollo 15'] 
    },
    { 
        id: 171, 
        name: 'Donald "Deke" Slayton', 
        job: 'Astronaut', 
        joined: 1959,
        group: 'Group 1',
        programs: ['Mercury', 'Gemini', 'Apollo'],
        missions: ['Apollo-Soyuz Test Project'],
        img: '../../img/300x300/slayton.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Deke_Slayton'
    },
    {
        id: 172, 
        name: 'Elliot M. See, Jr', 
        job: 'Astronaut', 
        programs: ['Gemini'],
        wiki: 'https://en.wikipedia.org/wiki/Elliot_See',
        joined: 1962
    },
    {
        id: 173, 
        name: 'Roger B. Chaffee', 
        job: 'Astronaut', 
        joined: 1963, 
        programs: ['Apollo'],
        missions: ['Apollo 1'] 
    },
    {
        id: 174, 
        name: 'Donn F. Eisele', 
        job: 'Astronaut', 
        joined: 1963, 
        programs: ['Apollo'],
        missions: ['Apollo 7']
    },
    {
        id: 175, 
        name: 'R. Walter Cunningham', 
        job: 'Astronaut', 
        joined: 1963, 
        programs: ['Apollo'],
        missions: ['Apollo 7']
    },
    {
        
        id: 176, 
        name: 'Russell L. Schweickart', 
        job: 'Astronaut', 
        joined: 1963, 
        programs: ['Apollo'],
        missions: ['Apollo 9']
    },
    {
        id: 177, 
        name: 'William A. Anders', 
        job: 'Astronaut', 
        joined: 1963, 
        programs: ['Apollo'],
        missions: ['Apollo 8']
    },
    {
        id: 178, 
        name: 'Alan L. Bean', 
        job: 'Astronaut', 
        joined: 1963, 
        programs: ['Apollo'],
        missions: ['Apollo 12', 'Skylab 3']
    },
    {
        id: 179,
        job: 'Mission Control',
        title: 'Flight Director',
        name: 'Christopher Kraft',
        joined: 1958,
        programs: ['Mercury', 'Gemini'],
        missions: ['MR-3', 'MR-4', 'MA-6', 'MA-7', 'MA-8', 'MA-9'], 
        wiki: 'https://en.wikipedia.org/wiki/Christopher_C._Kraft_Jr.#Mercury', 
        img: '../../img/300x300/kraft.jpg'
    },
    {
        id: 180,
        job: 'Communications',
        title: 'Ground Communication Coordinator',
        name: 'Andy Anderson',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 181,
        job: 'Engineering',
        title: 'Power and Sequential Engineering',
        name: 'Charlie Mars',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 182,
        job: 'Engineering',
        title:'Aerospace Technologist',
        name: 'Don Phillips',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 183,
        job: 'Mission Control',
        title: 'Director, Mission Control Center Requirements Branch',
        name: 'Tecwyn Roberts',
        joined: 1959,
        programs: ['Mercury'],
        missions: ['MR-3', 'MR-4', 'MA-6', 'MA-7', 'MA-8', 'MA-9'],
        wiki: 'https://en.wikipedia.org/wiki/Tecwyn_Roberts#cite_note-thoughts-17'
    },
    {
        id: 184,
        job: 'Mission Control',
        title: 'Flight Dynamics Officer',
        name: 'Glynn S. Lunney',
        programs: ['Mercury', 'Gemini', 'Apollo'],
        missions: ['MR-3', 'MR-4', 'MA-6', 'MA-7', 'MA-8', 'MA-9'],
        wiki: 'https://en.wikipedia.org/wiki/Glynn_Lunney',
        img: '../../img/300x300/lunney.jpg'
    },
    {
        id: 185,
        job: 'Mission Control',
        title: 'Deputy Flight Director',
        name: 'John Hodge',
        joined: 1959,
        programs: ['Mercury', 'Gemini', 'Apollo'],
        missions: ['MR-3', 'MR-4', 'MA-6', 'MA-7', 'MA-8', 'MA-9'],
        wiki: 'https://en.wikipedia.org/wiki/John_Hodge_(engineer)',
        img: '../../img/300x300/hodge.jpg'
    },
    {
        id: 186,
        job: 'Mission Control',
        title: 'Assistant Flight Director',
        name: 'Gene Kranz',
        joined: 1960,
        programs: ['Mercury', 'Gemini', 'Apollo'],
        missions: ['MR-3', 'MR-4', 'MA-6', 'MA-7', 'MA-8', 'MA-9'],
        wiki: 'https://en.wikipedia.org/wiki/Gene_Kranz',
        img: '../../img/300x300/kranz.jpg'
    },
    {
        id: 187,
        job: 'Mission Control',
        name: 'John Aaron',
        programs: ['Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option',
        img: '../../img/300x300/aaron.jpg'
    },
    {
        id: 188,
        job: 'Mission Control',
        name: 'Steve Bales',
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 189,
        job: 'Mission Control',
        name: 'Jay Greene',
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 190,
        job: 'Mission Control',
        name: 'Sy Liebergot',
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 191,
        job: 'Mission Control',
        name: 'Ted White',
        missions: ['MA-9'],
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 192,
        job: 'Mission Control',
        name: 'Chuck Lewis',
        missions: ['MA-9'],
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 193,
        job: 'Simulation',
        name: 'Mel Brooks',
        title: 'Simulation Supervisor',
        missions: ['MA-9'],
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 194,
        job: 'Contractor',
        name: 'Paul Johnson',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option',
        company: 'Western Electric'
    },
    {
        id: 195,
        job: 'Mission Control',
        name: 'Carl Huss',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 196,
        job: 'Mission Control',
        name: 'John Llewellyn',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 197,
        job: 'Mission Control',
        name: 'Arnold Aldrich',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 198,
        job: 'Computing',
        name: 'Mary Shep Burton',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 199,
        job: 'Computing',
        name: 'Cathy Osgood',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 200,
        job: 'Computing',
        name: 'Shirley Hunt',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 201,
        job: 'Mission Control',
        title: 'Flight Surgeon',
        name: 'Warren Prescott',
        programs: ['Gemini'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 202,
        job: 'Mission Control',
        name: 'Bill Bucholtz',
        programs: ['Gemini'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 203,
        job: 'Astronaut',
        name: 'Sally Ride',
        wiki: 'https://en.wikipedia.org/wiki/Sally_Ride',
        programs: ['Space Shuttle'],
        missions: ['STS-7', 'STS-41-G'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/sally-ride.jpg'
    },
    {
        id: 204,
        job: 'Astronaut',
        name: 'Judith Resnik',
        wiki: 'https://en.wikipedia.org/wiki/Judith_Resnik',
        programs: ['Space Shuttle'],
        missions: ['STS-41-D', 'ST-51-L'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/judith-resnik.jpg'
    },
    {
        id: 205,
        job: 'Astronaut',
        name: 'Kathryn D. Sullivan',
        wiki: 'https://en.wikipedia.org/wiki/Kathryn_D._Sullivan',
        programs: ['Space Shuttle'],
        missions: ['STS-41-G', 'STS-31', 'STS-45'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/kathryn-sullivan.jpg'
    },
    {
        id: 206,
        job: 'Astronaut',
        name: 'Anna Lee Fisher',
        wiki: 'https://en.wikipedia.org/wiki/Anna_Lee_Fisher',
        programs: ['Space Shuttle'],
        missions: ['STS-51-A'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/anna-fisher.jpg'
    },
    {
        id: 207,
        job: 'Astronaut',
        name: 'Margaret Rhea Seddon',
        wiki: 'https://en.wikipedia.org/wiki/Margaret_Rhea_Seddon',
        programs: ['Space Shuttle'],
        missions: ['STS-51-D', 'STS-40', 'STS-58'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/margaret-seddon.jpg'

    },
    {
        id: 208,
        job: 'Astronaut',
        name: 'Shannon Lucid',
        programs: ['Space Shuttle'],
        missions: ['STS-51-G', 'STS-34', 'STS-43', 'STS-58', 'STS-76/79'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/shannon-lucid.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Shannon_Lucid'
    },
    {
        id: 209,
        job: 'Astronaut',
        name: 'Bonnie J. Dunbar',
        programs: ['Space Shuttle'],
        missions: ['STS-61-A', 'STS-32', 'STS-50', 'STS-71', 'STS-89'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/bonnie-dunbar.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Bonnie_J._Dunbar'
    },
    {
        id: 210,
        job: 'Astronaut',
        name: 'Mary L. Cleave',
        programs: ['Space Shuttle'],
        missions: ['STS-61-B', 'STS-30'],
        tags: ['first women', 'female', 'woman'],
        img: '../../img/300x300/mary-cleave.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Mary_L._Cleave'
    },
    {
        id: 211,
        job: 'Astronaut',
        name: 'Dr. Harrison H. "Jack" Schmitt',
        group: 'Group 4',
        missions: ['Skylab 3', 'STS-9'],
        joined: 1965
    },
    {
        id: 212,
        job: 'Astronaut',
        name: 'T. Kenneth Mattingly II',
        group: 'Group 5',
        joined: 1966,
        programs: ['Apollo'],
        missions: ['Apollo 16', 'STS-4', 'STS-51-C']
    },
    {
        id: 213,
        job: 'Astronaut',
        name: 'John L. "Jack" Swigert, Jr',
        joined: 1966,
        group: 'Group 5',
        programs: ['Apollo'],
        missions: ['Apollo 13']
    },
    {
        id: 214,
        job: 'Astronaut',
        name: 'Fred Haise',
        joined: 1966,
        group: 'Group 5',
        programs: ['Apollo'],
        missions: ['Apollo 13']
    },
    {
        id: 215,
        job: 'Astronaut',
        name: 'Stuart Roosa',
        joined: 1966,
        group: 'Group 5',
        programs: ['Apollo'],
        missions: ['Apollo 14'],
        stats: {
            time_in_space: '09:00:01'
        }
    },
    {
        id: 216,
        job: 'Astronaut',
        name: 'Edgar Mitchell',
        joined: 1966,
        missions: ['Apollo 14'],
        programs: ['Apollo'],
        stats: {
            time_in_space: '09:00:01',
            eva_num: 2,
            eva_time: '09:23'
        }
    },
    {
        id: 217,
        job: 'Astronaut',
        name: 'Alfred Worden',
        joined: 1966,
        missions: ['Apollo 15'],
        stats: {
            time_in_space: '12:07:12',
            eva_num: 1,
            eva_time: '00:38'
        }
    },
    {
        id: 218,
        job: 'Astronaut',
        joined: 1966,
        name: 'James Irwin',
        missions: ['Apollo 15'],
        stats: {
            time_in_space: '12:07:12',
            eva_num: 4,
            eva_time: '18:35'
        }
    },
    {
        id: 219,
        job: 'Astronaut',
        joined: 1966,
        name: 'Charles Duke',
        missions: ['Apollo 16'],
        stats: {
            time_in_space: '11:01:51',
            eva_num: 3,
            eva_time: '20:15'
        }
    },
    {
        id: 220,
        job: 'Astronaut',
        name: 'Ronald Evans',
        joined: 1966,
        missions: ['Apollo 17'],
        stats: {
            time_in_space: '12:13:52',
            eva_num: 1,
            eva_time: '01:05'
        }
    },
    {
        id: 221,
        job: 'Astronaut',
        name: 'Clifton Williams',
        group: 'Group 3',
        programs: ['Apollo']
    },
    {
        id: 222,
        job: 'Astronaut',
        name: 'Edward Givens',
        group: 'Group 5',
        joined: 1966,
        programs: ['Apollo']
    },
    {
        id: 223,
        job: 'Astronaut',
        name: 'Joseph Engle',
        joined: 1966,
        group: 'Group 5',
        programs: ['Apollo']
    },
    {
        id: 224,
        job: 'Engineering',
        name: 'Wernher von Braun'
    },
    {
        id: 225,
        job: 'Engineering',
        name: 'Dr. Robert Goddard'
    },
    {
        id: 226,
        job: 'Mission Control',
        name: 'Howard Kyle',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 227,
        job: 'Chimpanzee',
        name: 'Ham',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 228,
        job: 'Communications',
        name: 'Jim McDowell',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 229,
        job: 'Management',
        name: 'Walt Williams',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 230,
        job: 'Management',
        name: 'James Webb',
        title: 'NASA Administrator',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 231,
        job: 'Management',
        name: 'Harry Goett',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 232,
        job: 'Management',
        name: 'Robert Gilruth',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 233,
        job: 'Management',
        name: 'G. Merritt Preston',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 234,
        job: 'Management',
        name: 'George Low',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'
    },
    {
        id: 235,
        job: 'Public Relations',
        name: 'Shorty Powers',
        programs: ['Mercury'],
        source: 'Kranz, Gene, Failure is Not an Option'   
    },
    {
        id: 236,
        job: 'Management',
        name: 'Abe Silverstein',
        programs: ['Mercury, Gemini, Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 237,
        job: 'Management',
        name: 'Hugh Dryden',
        programs: ['Mercury, Gemini, Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 238,
        job: 'Engineering',
        name: 'Maxime Faget',
        programs: ['Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 239,
        job: 'Management',
        name: 'Robert Seamans',
        programs: ['Mercury, Gemini, Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 240,
        job: 'Engineering',
        name: 'Kurt H. Debus',
        programs: ['Mercury, Gemini, Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 241,
        job: 'Management',
        name: 'George E. Mueller',
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 242,
        job: 'Management',
        name: 'Samuel C. Philips',
        programs: ['Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 243,
        job: 'Management',
        name: 'D. Brainerd Holmes',
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 244,
        job: 'Engineering',
        name: 'John Houbolt',
        programs: ['Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    },
    {
        id: 245,
        job: 'Management',
        name: 'Joseph Shea',
        programs: ['Apollo'],
        source: 'Kranz, Gene, Failure is Not an Option'  
    }
];

export const BIOS: Bio[] = [
    {
        id: 151,
        name: 'Alan Shepard',
        summary: [
            `Rear Admiral Alan Bartlett "Al" Shepard Jr. (November 18, 1923 – July 21, 1998) was an American naval officer and aviator, test pilot, one of the original NASA Mercury Seven astronauts, and businessman, who in May 1961 made the first manned Mercury flight. Shepard's craft entered space, but did not achieve orbit. He became the second person, and the first American, to travel into space, and the first person to manually control the orientation of his spacecraft.`,
            `Ten years later, at age 47 and the oldest astronaut in the program, Shepard commanded the Apollo 14 mission (1971), piloting the lander Antares to the most accurate landing of the Apollo missions. He became the fifth and oldest person to walk on the Moon, and the only one of the Mercury Seven to do so. During the mission, he hit two golf balls on the lunar surface.`,
            `These were his only two space flights, as his flight status was interrupted for five years during the Mercury and Gemini programs by Ménière's disease, an inner-ear disease that was surgically corrected before his Moon flight. Shepard served as Chief of the Astronaut Office from November 1963 to July 1969 (the approximate period of his grounding), and from June 1971 to August 1, 1974 (from his last flight to his retirement). He was promoted to rear admiral on August 25, 1971, the first astronaut to reach that rank. He retired from the United States Navy and NASA in 1974.`
        ],
        career: [
            {
                title: 'Mercury 7',
                body: [
                    `In 1959, the newly formed National Aeronautics and Space Administration (NASA) received permission from President Dwight D. Eisenhower to recruit its first astronauts from the ranks of military test pilots. The service records of 508 graduates of test pilot schools were obtained from the Department of Defense. From these, 110 were found that matched the minimum standards.[40] These included being less than 40 years old, with a bachelor's degree or equivalent, and no taller than 5 feet 11 inches (1.80 m). While there was flexibility with some requirements, the height requirement was firm, owing to the size of the Project Mercury spacecraft.[41] The 110 were then split into three groups, with the most promising candidates in the first group.[42]`,
                    `The first group of 35, which included Shepard, assembled at the Pentagon on February 2, 1959. The Navy and Marine Corps officers were welcomed by the Chief of Naval Operations, Admiral Arleigh Burke, while the United States Air Force officers were addressed by the Chief of Staff of the United States Air Force, General Thomas D. White. Both pledged their support to the Space Program, and promised that the careers of volunteers would not be adversely affected. NASA officials then briefed them on Project Mercury. They conceded that it would be a hazardous undertaking, but emphasised that it was of great national importance. That evening, Shepard discussed the day's events with fellow naval aviators Jim Lovell, Pete Conrad and Wally Schirra. All were concerned about their careers, but decided to volunteer.[43][44]`,
                    `The briefing process was repeated with a second group of 34 candidates a week later. Of the 69, six were found to be over the height limit, 15 were eliminated for other reasons, and 16 declined. This left NASA with 32 candidates. Since this was more than expected, it was decided not only to not bother with the remaining candidates, but to select six astronauts instead of the twelve originally planned. Then came a grueling series of physical and psychological tests at the Lovelace Clinic and the Wright Aerospace Medical Laboratory.[45] Only one candidate, Lovell, was eliminated on medical grounds at this stage, and the diagnosis was later found to be in error.[46]`,
                    `Shepard was informed of his selection on April 1, 1959. Two days later he headed up to Boston with Louise for the wedding of his cousin Alice, and was able to break the news to his parents and sister.[47][48] The identities of the seven were made public at a press conference at Dolley Madison House in Washington, DC, on April 9, 1959:[49] Scott Carpenter, Gordon Cooper, John Glenn, Gus Grissom, Wally Schirra, Alan Shepard, and Deke Slayton.[45] The enormity of the challenge ahead of them was made clear a few weeks later, on the night of May 18, 1959, when the seven astronauts gathered at Cape Canaveral to watch their first rocket launch, of an SM-65D Atlas similar to the one that was to carry them into orbit. A few minutes after lift off, it spectacularly exploded, lighting up the night sky. The astronauts were stunned. Shepard turned to Glenn and said: "Well, I'm glad they got that out of the way."[50]`
                ] 
            },
            {
                title: 'Freedom 7',
                body: [
                    `Faced with intense competition from the other astronauts, particularly John Glenn, Shepard quit smoking, and adopted Glenn's habit of taking a morning jog, although he did not go so far as to give up the cocktails or the philandering.[51] On January 19, 1961, Robert R. Gilruth, the director of NASA's Space Task Group, informed the seven astronauts that Shepard had been chosen for the first American manned mission into space.[52] Shepard later recalled Louise's response when he told her that she had her arms around the man who would be the first man in space: "Who let a Russian in here?"[53] During training he flew 120 simulated flights.[54] Although his flight was originally scheduled for April 26, 1960,[55] delays by unplanned preparatory work meant that this was postponed several times, initially to December 5, 1960, then mid-January 1961,[56] March 6, 1961,[57] April 25, 1961,[58] May 2, 1961, and finally to May 5, 1961.[59] On April 12, 1961, Soviet cosmonaut Yuri Gagarin had become the first person in space, and the first to orbit the Earth. When reporters rang Shorty Powers for a comment at 4am, he memorably replied: "We're all asleep down here".[60]`,
                    `On May 5, 1961, Shepard piloted the Mercury-Redstone 3 mission and became the second person, and the first American, to travel into space.[61] He named his spacecraft, Mercury Spacecraft 7, Freedom 7.[57] It was launched by a Redstone rocket, and unlike Gagarin's 108-minute orbital flight in a Vostok spacecraft three times the size of a Mercury capsule,[60] Shepard stayed on a ballistic trajectory for a 15-minute sub-orbital flight, which carried him to an altitude of 116 statute miles (187 km) and to a splashdown point 302 statute miles (486 km) down the Atlantic Missile Range.[62] Shortly before the launch, Shepard said to himself: "Don't mess up, Shepard ..."[63] Unlike Gagarin, whose flight was strictly automatic, Shepard had some control of Freedom 7, spacecraft attitude in particular.[64] Shepard's launch was seen live on television by millions.[65] According to Gene Kranz in his book Failure Is Not an Option, "When reporters asked Shepard what he thought about as he sat atop the Redstone rocket, waiting for liftoff, he had replied, 'The fact that every part of this ship was built by the lowest bidder.'[66]`,
                    `After a dramatic Atlantic Ocean recovery, Commander Shepard observed, "... didn't really feel the flight was a success until the recovery had been successfully completed. It's not the fall that hurts; it's the sudden stop."[67] Splashdown occurred with an impact comparable to landing a jet aircraft on an aircraft carrier. A recovery helicopter arrived after a few minutes, and the capsule was lifted partly out of the water to allow Shepard to leave by the main hatch. He squeezed out of the door and into a sling hoist, and was pulled into the helicopter, which flew both the astronaut and spacecraft to the aircraft carrier USS Lake Champlain. The whole recovery process took just eleven minutes.[68] Shepard was celebrated as a national hero, honored with ticker-tape parades in Washington, New York and Los Angeles, and received the NASA Distinguished Service Medal from President John F. Kennedy.[69] He was also awarded the Distinguished Flying Cross.[70]`,
                    `Shepard served as capsule communicator (CAPCOM) for Glenn's Mercury-Atlas 6 orbital flight, which he had also been considered for,[71] and Carpenter's Mercury-Atlas 7.[72] He was the backup pilot for Cooper for the Mercury-Atlas 9 mission,[73] nearly replacing Cooper after Cooper flew low over the NASA administration building at Cape Canaveral in an F-106.[74] In the final stages of Project Mercury, Shepard was scheduled to pilot the Mercury-Atlas 10 (MA-10), which was planned as a three-day mission.[75] He named Mercury Spacecraft 15B Freedom 7 II in honor of his first spacecraft,[76] but on June 12, 1963, NASA Administrator James E. Webb announced that Mercury had accomplished all its goals, and no more missions would be flown.[75] Shepard went as far as making a personal appeal to President Kennedy, but to no avail.[77]`
                ]
            }
        ]
    },
    {
        id: 152,
        name: 'Virgil "Gus" Grissom',
        summary: [`Lieutenant Colonel Virgil Ivan "Gus" Grissom (April 3, 1926 – January 27, 1967) was one of the original NASA Project Mercury astronauts, a United States Air Force test pilot and a mechanical engineer. He was the second American to fly in space, and the first member of the NASA Astronaut Corps to fly in space twice.`,
        `Grissom was killed along with fellow astronauts Ed White and Roger Chaffee during a pre-launch test for the Apollo 1 mission at Cape Canaveral Air Force Station (then known as Cape Kennedy), Florida. He was the first of the Mercury Seven to die. He was also a recipient of the Distinguished Flying Cross and, posthumously, the Congressional Space Medal of Honor.`]
    },
    { id: 164, name: 'Edward H. White', wiki:'https://en.wikipedia.org/wiki/Edward_Higgins_White' },
    { id: 165, name: 'John W. Young', wiki: 'https://en.wikipedia.org/wiki/John_Young_(astronaut)' }
];