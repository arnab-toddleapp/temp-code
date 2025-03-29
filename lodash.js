const _ = require("lodash");

// console.log(_.isEmpty()); // true
// console.log(_.isEmpty(null)); // true
// console.log(_.isEmpty(undefined)); // true

// const incidentDetails = {
//   uid: "uid_value",
//   state: "state_value",
//   involved_student: {
//     id: "id_value",
//     name: "name_value",
//   },
//   created_by: "created_by_value",
//   updated_by: "updated_by_value",
// };

// const {
//   uid,
//   state,
//   involved_student = {},
//   actions = [],
//   created_by,
//   updated_by,
// } = incidentDetails || {};

// console.log(uid);
// console.log(state);
// console.log(involved_student);
// console.log(actions);
// console.log(created_by);
// console.log(updated_by);

// const incidentId = "9876";
// const curriculumProgramId = "642371581271";
// const studentId = "41781271428";
// const primaryEntity = "ABFAJKFASBJ";

// const pushNotificationCommonData = {
//   redirectUrlTokens: { incidentId },
//   additionalDataObj: {
//     incidentId,
//     curriculumProgramId,
//     ...(studentId ? { studentId } : {}),
//   },
// };

// const pushNotificationParentData = {
//   redirectUrlTokens: { studentId },
//   collapseId: primaryEntity,
// };

// const pushNotificationOtherUserData = {
//   collapseId: primaryEntity,
// };

// console.log("\npushNotificationParentData:: ");
// console.log(
//   _.merge(_.cloneDeep(pushNotificationCommonData), pushNotificationParentData)
// );

// console.log("\npushNotificationOtherUserData:: ");
// console.log(
//   _.merge(
//     _.cloneDeep(pushNotificationCommonData),
//     pushNotificationOtherUserData
//   )
// );

// const sharedIncidents = [
//   { uid: "130046121769697518" },
//   { uid: "132726408471380246" },
//   { uid: "134480198551732628" },
//   { uid: "134555845957517724" },
//   { uid: "135172460495503791" },
//   { uid: "135174786249654704" },
//   { uid: "137527574317236758" },
//   { uid: "138110663808516648" },
//   { uid: "140937137829708367" },
//   { uid: "150122895559885722" },
//   { uid: "153662484169884666" },
//   { uid: "153669569184007164" },
//   { uid: "155225770933879867" },
//   { uid: "155486646672819270" },
//   { uid: "155840603978990688" },
//   { uid: "155873661700539489" },
//   { uid: "156160900347200632" },
//   { uid: "156673867157341323" },
//   { uid: "156911414592668830" },
//   { uid: "158030966097446084" },
//   { uid: "158752875168662775" },
//   { uid: "165221407100241369" },
//   { uid: "173974826933814969" },
//   { uid: "175436800620234705" },
//   { uid: "180131607754049537" },
//   { uid: "180468813765019653" },
// ];

// const behhaviourModuleAdminIncidents = [
//   { uid: "112701087785418754" },
//   { uid: "115325245677633622" },
//   { uid: "117837408308822164" },
//   { uid: "119976641865711785" },
//   { uid: "119986966929342635" },
//   { uid: "120305643193106610" },
//   { uid: "125722115444834498" },
//   { uid: "129801151708135642" },
//   { uid: "130046121769697518" },
//   { uid: "130085594209452273" },
//   { uid: "130413814087680250" },
//   { uid: "130414593682964731" },
//   { uid: "130462278481871105" },
//   { uid: "130503296430375170" },
//   { uid: "130537618927517957" },
//   { uid: "132687543501062420" },
//   { uid: "133027464552120661" },
//   { uid: "133076667408056672" },
//   { uid: "133078847888294241" },
//   { uid: "133360744006680940" },
//   { uid: "133407949811876212" },
//   { uid: "134111894809084280" },
//   { uid: "134466891618976142" },
//   { uid: "134474621041770895" },
//   { uid: "134475205056659856" },
//   { uid: "134509569568145815" },
//   { uid: "134800245526626720" },
//   { uid: "134801478706528673" },
//   { uid: "135175611025981873" },
//   { uid: "135300513062191559" },
//   { uid: "135505122066170318" },
//   { uid: "135505402417643983" },
//   { uid: "135526677466841554" },
//   { uid: "137411442436473361" },
//   { uid: "137421927135314452" },
//   { uid: "137741704131248664" },
//   { uid: "138110319917531687" },
//   { uid: "138136623501017642" },
//   { uid: "140273002297164352" },
//   { uid: "140274805474591297" },
//   { uid: "140276458839867970" },
//   { uid: "140288847538815556" },
//   { uid: "140293283153707590" },
//   { uid: "140622321265148487" },
//   { uid: "140622559719719496" },
//   { uid: "142409743263072878" },
//   { uid: "142412344989844079" },
//   { uid: "142880556013585061" },
//   { uid: "142962926016266919" },
//   { uid: "143215693561594543" },
//   { uid: "145994839954031376" },
//   { uid: "146056789270463250" },
//   { uid: "147147882300965657" },
//   { uid: "147148833879491355" },
//   { uid: "147192684803523361" },
//   { uid: "150122895559885722" },
//   { uid: "152427972739990476" },
//   { uid: "152528099211215823" },
//   { uid: "153662484169884666" },
//   { uid: "153669569184007164" },
//   { uid: "153689085213410306" },
//   { uid: "153721522505122828" },
//   { uid: "153725976352654349" },
//   { uid: "155087553374979115" },
//   { uid: "155914245664408682" },
//   { uid: "156160900347200632" },
//   { uid: "156673867157341323" },
//   { uid: "156911414592668830" },
//   { uid: "158775861305148668" },
//   { uid: "158876112418505984" },
//   { uid: "159797852128675076" },
//   { uid: "160220771845670165" },
//   { uid: "160222018971632918" },
//   { uid: "160265685962851610" },
//   { uid: "160267406810285339" },
//   { uid: "160506317117588771" },
//   { uid: "160526941428909352" },
//   { uid: "163841663632934324" },
//   { uid: "164893159443137985" },
//   { uid: "164906405055169987" },
//   { uid: "167472049541875259" },
//   { uid: "167474769413801534" },
//   { uid: "167481074438374980" },
//   { uid: "167749540743480904" },
//   { uid: "167750683200587337" },
//   { uid: "167752824803821130" },
//   { uid: "167758225465149008" },
//   { uid: "167758355576653393" },
//   { uid: "167758693343954514" },
//   { uid: "167758950203131476" },
//   { uid: "168523726923499098" },
//   { uid: "168929447473317488" },
//   { uid: "170001479866779256" },
//   { uid: "173552980694402737" },
//   { uid: "173598420253017783" },
//   { uid: "173913208715740856" },
//   { uid: "173974826933814969" },
//   { uid: "175436800620234705" },
//   { uid: "176155672956635092" },
//   { uid: "176156197286578133" },
//   { uid: "176168371010668502" },
//   { uid: "176173090298922967" },
//   { uid: "176182631069648856" },
//   { uid: "176186054838061017" },
//   { uid: "176187836020557786" },
//   { uid: "180108626361321472" },
//   { uid: "180139725657475074" },
//   { uid: "180590676335921162" },
//   { uid: "180810095586707472" },
//   { uid: "180814003834980369" },
//   { uid: "180814518375417874" },
//   { uid: "180816628710115349" },
//   { uid: "180817062766053398" },
//   { uid: "180818984940079127" },
//   { uid: "180819629441026073" },
//   { uid: "180820067263449115" },
//   { uid: "180829318295848988" },
//   { uid: "180829494905407517" },
//   { uid: "180829700698933278" },
//   { uid: "180835363634284575" },
//   { uid: "180835958768273440" },
//   { uid: "180837178195052577" },
//   { uid: "181176918287058992" },
//   { uid: "181186064516384823" },
//   { uid: "181205092131670072" },
//   { uid: "181205205738588217" },
//   { uid: "181205324600969274" },
// ];

// // Extract incident IDs from both arrays
// const sharedIncidentsIds = _.map(sharedIncidents, "uid");
// const behhaviourModuleAdminIncidentIds = _.map(behhaviourModuleAdminIncidents, "uid");

// // 1. Combined unique IDs
// const combinedUniqueIds = _.union(
//   sharedIncidentsIds,
//   behhaviourModuleAdminIncidentIds
// );

// // 2. Common IDs
// const commonIds = _.intersection(
//   sharedIncidentsIds,
//   behhaviourModuleAdminIncidentIds
// );

// // 3. Non-common IDs
// const nonCommonIds = _.xor(
//   sharedIncidentsIds,
//   behhaviourModuleAdminIncidentIds
// );

// console.log(
//   `\nCombined Unique IDs Length: ${_.size(combinedUniqueIds)}, IDs: `,
//   JSON.stringify(combinedUniqueIds)
// );
// console.log(
//   `\nCommon IDs Length: ${_.size(commonIds)}, IDs: `,
//   JSON.stringify(commonIds)
// );
// console.log(
//   `\nNon-Common IDs Length: ${_.size(nonCommonIds)}, IDs: `,
//   JSON.stringify(nonCommonIds)
// );

// const staffCurriDetails = [
//   {
//     id: "403913",
//     program_ids: ["10660"],
//   },
//   {
//     id: "29367526441881020",
//     program_ids: ["10660"],
//   },
//   {
//     id: "39201333911231153",
//     program_ids: ["10660"],
//   },
//   {
//     id: "113525950578175606",
//     program_ids: ["10660"],
//   },
//   {
//     id: "113526026386026104",
//     program_ids: ["10661", "10741"],
//   },
//   {
//     id: "180900273579890885",
//     program_ids: ["10660", "10741"],
//   },
// ];

// const uniqueProgramIds = _.uniq(_.flatMap(staffCurriDetails, "program_ids"));
// console.log("uniqueProgramIds:: ", uniqueProgramIds);

// const categories = [
//   {
//     id: "110149884325134337",
//     name: "Offences",
//     parent_category_id: null,
//     level: 0,
//     icon_data: {
//       icon: "WeightOutlined",
//     },
//     color: "#6464dc",
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-25T06:05:52.28559",
//     updated_by: "44214204403552948",
//     updated_at: "2024-09-09T06:11:07.0897",
//     display_sequence: null,
//     children: ["110603889656463365", "110603889660657670"],
//   },
//   {
//     id: "110603889656463365",
//     name: "First degree violations",
//     parent_category_id: "110149884325134337",
//     level: 1,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:09:55.591435",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: ["110604151653662728", "110604151653662727"],
//   },
//   {
//     id: "110603889660657670",
//     name: "Second degree violations",
//     parent_category_id: "110149884325134337",
//     level: 1,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:09:55.591553",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [
//       "110606740474560523",
//       "110604151653662730",
//       "110604151653662729",
//     ],
//   },
//   {
//     id: "110606740474560523",
//     name: "Misuse of school facilities",
//     parent_category_id: "110603889660657670",
//     level: 2,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:21:15.279055",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [
//       "110607772961210396",
//       "134983036201599186",
//       "134983036205793491",
//     ],
//   },
//   {
//     id: "110604151653662728",
//     name: "General school policies and class related violations",
//     parent_category_id: "110603889656463365",
//     level: 2,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:10:58.056403",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [
//       "110607772961210387",
//       "110607772961210386",
//       "110607772961210388",
//       "110607772961210384",
//       "110607772961210385",
//     ],
//   },
//   {
//     id: "110604151653662730",
//     name: "Destroying school property",
//     parent_category_id: "110603889660657670",
//     level: 2,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:10:58.056424",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [
//       "110607772961210395",
//       "110607772961210394",
//       "110607772961210392",
//       "110607772961210393",
//       "110607772961210391",
//     ],
//   },
//   {
//     id: "110604151653662727",
//     name: "Not adhering to school uniform and dress policy",
//     parent_category_id: "110603889656463365",
//     level: 2,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:10:58.056354",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [
//       "110607772961210381",
//       "110607772961210383",
//       "110607772961210382",
//       "110607772961210380",
//     ],
//   },
//   {
//     id: "110604151653662729",
//     name: "Bullying or engaging in fight/violence",
//     parent_category_id: "110603889660657670",
//     level: 2,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:10:58.056414",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 3,
//     children: ["110607772961210390", "110607772961210389"],
//   },
//   {
//     id: "110607772961210390",
//     name: "Inciting a quarrel or threatening or intimidating any classmates at school",
//     parent_category_id: "110604151653662729",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442755",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [],
//   },
//   {
//     id: "110607772961210395",
//     name: "Purposefully destroying the sports equipments",
//     parent_category_id: "110604151653662730",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.4428",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [],
//   },
//   {
//     id: "110607772961210381",
//     name: "Long hair or nails",
//     parent_category_id: "110604151653662727",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442664",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [],
//   },
//   {
//     id: "110607772961210396",
//     name: "Unauthorized use of science equipment",
//     parent_category_id: "110606740474560523",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442809",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [],
//   },
//   {
//     id: "110607772961210387",
//     name: "Failure to complete homework",
//     parent_category_id: "110604151653662728",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442727",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 1,
//     children: [],
//   },
//   {
//     id: "110607772961210394",
//     name: "Damaging bus and other amenities",
//     parent_category_id: "110604151653662730",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.44279",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [],
//   },
//   {
//     id: "110607772961210386",
//     name: "Tardiness or unexcused absence from class",
//     parent_category_id: "110604151653662728",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442718",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [],
//   },
//   {
//     id: "110607772961210389",
//     name: "Bullying of all sorts by force/verbal/abusing etc",
//     parent_category_id: "110604151653662729",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442746",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [],
//   },
//   {
//     id: "110607772961210383",
//     name: "Dress not appropriate for school",
//     parent_category_id: "110604151653662727",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442687",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [],
//   },
//   {
//     id: "134983036201599186",
//     name: "Using sports equipment for unintended purposes",
//     parent_category_id: "110606740474560523",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-07-02T18:43:57.069774",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 2,
//     children: [],
//   },
//   {
//     id: "134983036205793491",
//     name: "Conducting unapproved commercial activities",
//     parent_category_id: "110606740474560523",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-07-02T18:43:57.07113",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 3,
//     children: [],
//   },
//   {
//     id: "110607772961210382",
//     name: "Use of fancy accessory",
//     parent_category_id: "110604151653662727",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442677",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 3,
//     children: [],
//   },
//   {
//     id: "110607772961210388",
//     name: "Disrespectful language or behaviour",
//     parent_category_id: "110604151653662728",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442736",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 3,
//     children: [],
//   },
//   {
//     id: "110607772961210392",
//     name: "Vandalising the bulletin boards",
//     parent_category_id: "110604151653662730",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442772",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 3,
//     children: [],
//   },
//   {
//     id: "110607772961210393",
//     name: "Destroying or damaging the toilet using fireworks",
//     parent_category_id: "110604151653662730",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442781",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 4,
//     children: [],
//   },
//   {
//     id: "110607772961210384",
//     name: "Bringing electronic device to school",
//     parent_category_id: "110604151653662728",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442698",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 4,
//     children: [],
//   },
//   {
//     id: "110607772961210380",
//     name: "Fashionable hair and dress",
//     parent_category_id: "110604151653662727",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.44255",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 4,
//     children: [],
//   },
//   {
//     id: "110607772961210391",
//     name: "Vandalising school property by destroying fixtures",
//     parent_category_id: "110604151653662730",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442763",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 5,
//     children: [],
//   },
//   {
//     id: "110607772961210385",
//     name: "Class room disruption",
//     parent_category_id: "110604151653662728",
//     level: 3,
//     icon_data: null,
//     color: null,
//     organization_id: 7197,
//     is_deleted: false,
//     deleted_by: null,
//     deleted_at: null,
//     created_by: 211874,
//     created_at: "2024-04-26T12:25:21.442708",
//     updated_by: 211874,
//     updated_at: "2024-07-08T07:26:52.309072",
//     display_sequence: 5,
//     children: [],
//   },
// ];

// const groupedSourceSubCategories = _.groupBy(categories, "level");

// console.log("groupCategories:: ", groupedSourceSubCategories);

// console.log("groupCategories Size:: ", _.size(groupedSourceSubCategories));

// const groupedSourceSubCategories = _.groupBy(sourceCategoryId, "level");
// const levelSize = _.size(groupedSourceSubCategories);
// const tempIdMap = {
//   [sourceCategoryId]: duplicateRootCategory.id,
// };

// for (let i = 1; i < levelSize; i++) {
//   const categories = groupedSourceSubCategories[i];

//   const duplicateCategoryInsertPayload = _.map(categories, (categoryNode) => {
//     return {
//       name: categoryNode.name,
//       color: categoryNode.color,
//       level: categoryNode.level,
//       icon_data: { sourceCategoryId: categoryNode.id },
//       display_sequence: categoryNode.display_sequence,
//       parent_category_id: tempIdMap[categoryNode.parent_category_id],
//       created_by: jwtUserId,
//       updated_by: jwtUserId,
//       organization_id: orgId,
//     };
//   });

//   const duplicateCategories = !_.isEmpty(duplicateCategoryInsertPayload)
//     ? await createBehaviourCategories(duplicateCategoryInsertPayload)
//     : [];

//   _.forEach(duplicateCategories, ({ id, icon_data }) => {
//     tempIdMap[icon_data.sourceCategoryId] = id;
//   });
// }

// const arr1 = [9, 9, 9, 9, 9, 9, 9, 1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 4, 8];
// const arr2 = [2, 4, 6, 9];

// console.log(_.uniq(_.difference(arr1, arr2)));

// console.log("isEmpty:: ", _.union([], []));

// const rnpRoleUsers = [
//   {
//     id: 196769735747056952,
//     fk_organization_role_id: 193475978989666554,
//     fk_user_id: 438077,
//     contextual_precedence_rank: 1,
//     context_type: "ORGANIZATION",
//     fk_context_id: "1947",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2024-12-20 06:42:14.180664",
//     created_by: 97288,
//     updated_at: null,
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 196769735747056953,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 438077,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "1876",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2024-12-20 06:42:14.180664",
//     created_by: 97288,
//     updated_at: null,
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 196769736049046848,
//     fk_organization_role_id: 193475978989666554,
//     fk_user_id: 406404,
//     contextual_precedence_rank: 1,
//     context_type: "ORGANIZATION",
//     fk_context_id: "1947",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2024-12-20 06:42:14.253047",
//     created_by: 97288,
//     updated_at: null,
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 196769736019686719,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 461675,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "1876",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2024-12-20 06:42:14.245553",
//     created_by: 97288,
//     updated_at: "2025-03-18 17:09:58.085039",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 196769736049046849,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 406404,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "1876",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2024-12-20 06:42:14.253047",
//     created_by: 97288,
//     updated_at: null,
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 196769736019686718,
//     fk_organization_role_id: 193475978989666554,
//     fk_user_id: 461675,
//     contextual_precedence_rank: 1,
//     context_type: "ORGANIZATION",
//     fk_context_id: "1947",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2024-12-20 06:42:14.245553",
//     created_by: 97288,
//     updated_at: "2025-03-18 17:09:58.085039",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 203304729034372233,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 26828627832218130,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "153713767987808422",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2025-01-07 07:29:57.994437",
//     created_by: 97288,
//     updated_at: "2025-03-20 10:45:47.370920",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 203304729038566538,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 26828627832218130,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "1874",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2025-01-07 07:29:57.994437",
//     created_by: 97288,
//     updated_at: "2025-03-20 10:45:47.370920",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 203304729038566539,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 26828627832218130,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "1875",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2025-01-07 07:29:57.994437",
//     created_by: 97288,
//     updated_at: "2025-03-20 10:45:47.370920",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 203304729038566540,
//     fk_organization_role_id: 193475978993860860,
//     fk_user_id: 26828627832218130,
//     contextual_precedence_rank: 1,
//     context_type: "CURRICULUM_PROGRAM",
//     fk_context_id: "6085",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2025-01-07 07:29:57.994437",
//     created_by: 97288,
//     updated_at: "2025-03-20 10:45:47.370920",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 207991058502519030,
//     fk_organization_role_id: 193475978989666554,
//     fk_user_id: 439190,
//     contextual_precedence_rank: 1,
//     context_type: "ORGANIZATION",
//     fk_context_id: "1947",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2025-01-20 05:51:46.008137",
//     created_by: 97288,
//     updated_at: null,
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
//   {
//     id: 203299317383967204,
//     fk_organization_role_id: 193475978989666554,
//     fk_user_id: 26828627832218130,
//     contextual_precedence_rank: 1,
//     context_type: "ORGANIZATION",
//     fk_context_id: "1947",
//     organization_id: 1947,
//     is_deleted: false,
//     created_at: "2025-01-07 07:08:27.755523",
//     created_by: 97288,
//     updated_at: "2025-03-20 10:45:47.370920",
//     updated_by: 97288,
//     fk_academic_year_id: 2985,
//   },
// ];

// const userRolesData = _.groupBy(rnpRoleUsers, "fk_user_id");

// const roleUserIds = _.reduce(
//   userRolesData,
//   (result, ru) => {
//     console.log("ru:: ", ru);

//     const accountRole = _.find(ru, { context_type: "ORGANIZATION" });
//     const {
//       fk_organization_role_id: accountRoleId,
//       fk_user_id: accountRoleUserId,
//     } = accountRole;

//     const programRole = _.find(ru, {
//       context_type: "CURRICULUM_PROGRAM",
//       fk_context_id: _.first(curriculumIds),
//     });

//     const {
//       fk_organization_role_id: programRoleId,
//       fk_user_id: programRoleUserId,
//     } = programRole;

//     if (!result[fk_organization_role_id]) {
//       result[fk_organization_role_id] = {
//         accountLevelRoleUserIds: [],
//         programRoleUserIds: [],
//       };
//     }

//     if (
//       context_type === "CURRICULUM_PROGRAM" &&
//       _.includes(curriculumIds, fk_context_id)
//     ) {
//       result[fk_organization_role_id].programRoleUserIds.push(fk_user_id);
//     }

//     // else if the context_type is "ORGANIZATION" check that the
//     else if (context_type === "ORGANIZATION") {
//       result[fk_organization_role_id].accountLevelRoleUserIds.push(fk_user_id);
//     }

//     return result;
//   },
//   {}
// );

// console.log("userRolesData:: ", userRolesData);

// const da = {
//   1234: ["a", "b", "c"],
//   5678: ["d", "e", "a"],
//   91011: ["f", "g", "h"],
// };

// const group_id = "5678";

// console.log("group_id:: ", group_id);
// console.log("gd:: ", _.get(da, group_id, []));

// const alphabets = [];
// _.forEach(da, (users) => {
//   console.log("users:: ", users);
//   alphabets.push(...users);
// });

// console.log("alphabets:: ", alphabets);
