function whitExtMod_isInLakeDuck() {
    return C.npc.Whitney.init === 1
        && C.npc.Whitney.state == "active"
        && !["snow", "rain"].includes(V.weather) //不是下雪或雨天
        && Time.hour >= 21 //晚上9點後
        && Time.weekDay !== 1 //不是星期天
        && Time.season !== "winter" //不是冬天
        && V.pillory_tenant.special.name !== "Whitney" //惠特尼不在頸手枷 
        && V.daily.whitney.whitExtMod_lake !== 0;
} window.whitExtMod_isInLakeDuck = whitExtMod_isInLakeDuck;



