({
	onInit : function(component) {
		var locks = [];
        locks.push({label: "玄関ドア", value: 1});
        locks.push({label: "ガレージドア", value: 1});
        component.set("v.locks", locks);
	}
})