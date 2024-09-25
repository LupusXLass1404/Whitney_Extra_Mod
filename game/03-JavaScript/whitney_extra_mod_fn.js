function whitExtMod() {
    V.whitExtMod = {};
} window.whitExtMod = whitExtMod;

function whitExtMod_isInLakeDuck() {
    return C.npc.Whitney.init === 1
        && C.npc.Whitney.state == "active"
        && Weather.isOvercast //陰天
        && Weather.precipitation == "none" //沒有下雨
        && !Weather.isFrozen("lake") //湖沒有結冰
        && Time.hour >= 21 //晚上9點後
        && Time.weekDay !== 1 //不是星期天
        && Time.season !== "winter" //不是冬天
        && V.halloween !== 1 //不是萬聖節
        && V.pillory.tenant.special.name !== "Whitney" //惠特尼不在頸手枷
        && V.daily.whitney.whitExtMod_lake !== 0
        && V.whitExtMod.lakeDuckDisable == "f";
} window.whitExtMod_isInLakeDuck = whitExtMod_isInLakeDuck;

function whitExtMod_parkSnowball() {
    return isInPark("whitney")
        && Weather.isSnow //有積雪
        && Weather.precipitation == "snow" //下雪
        && V.rng < 5
        && V.daily.whitney.whitExtMod_parkSnowball == undefined
        && V.whitExtMod.parkSnowballDisable == "f";
} window.whitExtMod_parkSnowball = whitExtMod_parkSnowball;



