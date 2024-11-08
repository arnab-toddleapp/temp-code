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

const sharedIncidents = [
  { uid: "130046121769697518" },
  { uid: "132726408471380246" },
  { uid: "134480198551732628" },
  { uid: "134555845957517724" },
  { uid: "135172460495503791" },
  { uid: "135174786249654704" },
  { uid: "137527574317236758" },
  { uid: "138110663808516648" },
  { uid: "140937137829708367" },
  { uid: "150122895559885722" },
  { uid: "153662484169884666" },
  { uid: "153669569184007164" },
  { uid: "155225770933879867" },
  { uid: "155486646672819270" },
  { uid: "155840603978990688" },
  { uid: "155873661700539489" },
  { uid: "156160900347200632" },
  { uid: "156673867157341323" },
  { uid: "156911414592668830" },
  { uid: "158030966097446084" },
  { uid: "158752875168662775" },
  { uid: "165221407100241369" },
  { uid: "173974826933814969" },
  { uid: "175436800620234705" },
  { uid: "180131607754049537" },
  { uid: "180468813765019653" },
];

const behhaviourModuleAdminIncidents = [
  { uid: "112701087785418754" },
  { uid: "115325245677633622" },
  { uid: "117837408308822164" },
  { uid: "119976641865711785" },
  { uid: "119986966929342635" },
  { uid: "120305643193106610" },
  { uid: "125722115444834498" },
  { uid: "129801151708135642" },
  { uid: "130046121769697518" },
  { uid: "130085594209452273" },
  { uid: "130413814087680250" },
  { uid: "130414593682964731" },
  { uid: "130462278481871105" },
  { uid: "130503296430375170" },
  { uid: "130537618927517957" },
  { uid: "132687543501062420" },
  { uid: "133027464552120661" },
  { uid: "133076667408056672" },
  { uid: "133078847888294241" },
  { uid: "133360744006680940" },
  { uid: "133407949811876212" },
  { uid: "134111894809084280" },
  { uid: "134466891618976142" },
  { uid: "134474621041770895" },
  { uid: "134475205056659856" },
  { uid: "134509569568145815" },
  { uid: "134800245526626720" },
  { uid: "134801478706528673" },
  { uid: "135175611025981873" },
  { uid: "135300513062191559" },
  { uid: "135505122066170318" },
  { uid: "135505402417643983" },
  { uid: "135526677466841554" },
  { uid: "137411442436473361" },
  { uid: "137421927135314452" },
  { uid: "137741704131248664" },
  { uid: "138110319917531687" },
  { uid: "138136623501017642" },
  { uid: "140273002297164352" },
  { uid: "140274805474591297" },
  { uid: "140276458839867970" },
  { uid: "140288847538815556" },
  { uid: "140293283153707590" },
  { uid: "140622321265148487" },
  { uid: "140622559719719496" },
  { uid: "142409743263072878" },
  { uid: "142412344989844079" },
  { uid: "142880556013585061" },
  { uid: "142962926016266919" },
  { uid: "143215693561594543" },
  { uid: "145994839954031376" },
  { uid: "146056789270463250" },
  { uid: "147147882300965657" },
  { uid: "147148833879491355" },
  { uid: "147192684803523361" },
  { uid: "150122895559885722" },
  { uid: "152427972739990476" },
  { uid: "152528099211215823" },
  { uid: "153662484169884666" },
  { uid: "153669569184007164" },
  { uid: "153689085213410306" },
  { uid: "153721522505122828" },
  { uid: "153725976352654349" },
  { uid: "155087553374979115" },
  { uid: "155914245664408682" },
  { uid: "156160900347200632" },
  { uid: "156673867157341323" },
  { uid: "156911414592668830" },
  { uid: "158775861305148668" },
  { uid: "158876112418505984" },
  { uid: "159797852128675076" },
  { uid: "160220771845670165" },
  { uid: "160222018971632918" },
  { uid: "160265685962851610" },
  { uid: "160267406810285339" },
  { uid: "160506317117588771" },
  { uid: "160526941428909352" },
  { uid: "163841663632934324" },
  { uid: "164893159443137985" },
  { uid: "164906405055169987" },
  { uid: "167472049541875259" },
  { uid: "167474769413801534" },
  { uid: "167481074438374980" },
  { uid: "167749540743480904" },
  { uid: "167750683200587337" },
  { uid: "167752824803821130" },
  { uid: "167758225465149008" },
  { uid: "167758355576653393" },
  { uid: "167758693343954514" },
  { uid: "167758950203131476" },
  { uid: "168523726923499098" },
  { uid: "168929447473317488" },
  { uid: "170001479866779256" },
  { uid: "173552980694402737" },
  { uid: "173598420253017783" },
  { uid: "173913208715740856" },
  { uid: "173974826933814969" },
  { uid: "175436800620234705" },
  { uid: "176155672956635092" },
  { uid: "176156197286578133" },
  { uid: "176168371010668502" },
  { uid: "176173090298922967" },
  { uid: "176182631069648856" },
  { uid: "176186054838061017" },
  { uid: "176187836020557786" },
  { uid: "180108626361321472" },
  { uid: "180139725657475074" },
  { uid: "180590676335921162" },
  { uid: "180810095586707472" },
  { uid: "180814003834980369" },
  { uid: "180814518375417874" },
  { uid: "180816628710115349" },
  { uid: "180817062766053398" },
  { uid: "180818984940079127" },
  { uid: "180819629441026073" },
  { uid: "180820067263449115" },
  { uid: "180829318295848988" },
  { uid: "180829494905407517" },
  { uid: "180829700698933278" },
  { uid: "180835363634284575" },
  { uid: "180835958768273440" },
  { uid: "180837178195052577" },
  { uid: "181176918287058992" },
  { uid: "181186064516384823" },
  { uid: "181205092131670072" },
  { uid: "181205205738588217" },
  { uid: "181205324600969274" },
];

// Extract incident IDs from both arrays
const sharedIncidentsIds = _.map(sharedIncidents, "uid");
const behhaviourModuleAdminIncidentIds = _.map(behhaviourModuleAdminIncidents, "uid");

// 1. Combined unique IDs
const combinedUniqueIds = _.union(
  sharedIncidentsIds,
  behhaviourModuleAdminIncidentIds
);

// 2. Common IDs
const commonIds = _.intersection(
  sharedIncidentsIds,
  behhaviourModuleAdminIncidentIds
);

// 3. Non-common IDs
const nonCommonIds = _.xor(
  sharedIncidentsIds,
  behhaviourModuleAdminIncidentIds
);

console.log(
  `\nCombined Unique IDs Length: ${_.size(combinedUniqueIds)}, IDs: `,
  JSON.stringify(combinedUniqueIds)
);
console.log(
  `\nCommon IDs Length: ${_.size(commonIds)}, IDs: `,
  JSON.stringify(commonIds)
);
console.log(
  `\nNon-Common IDs Length: ${_.size(nonCommonIds)}, IDs: `,
  JSON.stringify(nonCommonIds)
);
