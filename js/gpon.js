$(function() {
        $("#select-olt").change(function() {
                $("#select-pon").load("get.php?choice=" + $("#select-olt").val());
        });
});

$(function() {
        $("#select-onu").change(function() {
                $("#service-profile").load("get_service_profile.php?choice=" + $("#select-onu").val() + "&olt=" + $("#select-olt").val());
        });
});




$(function() {
$("#selectall").click(function () {
var checkAll = $("#selectall").prop('checked');
    if (checkAll) {
        $(".case").prop("checked", true);
    } else {
        $(".case").prop("checked", false);
    }
});
});


 

function getPage(customer_id, type) {
	$('#output').html('<center><img src="pic/loading.gif" /></center>');
	jQuery.ajax({
		url: "onu_info.php",
		data: {customer_id: customer_id, type: type},
		type: "POST"
	}).done(function(data) {
		$('#output').html(data);
		$('.dropdown-toggle').dropdown();
	});
	
}

function getPageRF(customer_id, type) {
	var selected = $('#rf_menu option:selected');
	$('#output').html('<center><img src="pic/loading.gif" /></center>');
	jQuery.ajax({
		url: "onu_info.php",
		data: {customer_id: customer_id, type: type, rf_val: selected.val()},
		type: "POST"
	}).done(function(data) {
		$('#output').html(data);
		$('.dropdown-toggle').dropdown();
	});
}


function getService(service_id) {
	jQuery.ajax({
		url: "service_modal.php",
		data: {service_id: service_id},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function getService_Profile(id) {
	jQuery.ajax({
		url: "service_profile_modal.php",
		data: {id: id},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function getLine_profile(id) {
	jQuery.ajax({
		url: "line_profile_modal.php",
		data: {id: id},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function getOlt(olt_id) {
	jQuery.ajax({
		url: "olt_modal.php",
		data: {olt_id: olt_id},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function getPon(pon_id, olt) {
	jQuery.ajax({
		url: "pon_modal.php",
		data: {pon_id: pon_id, olt: olt},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function addPon(olt) {
	jQuery.ajax({
		url: "pon_modal.php",
		data: {olt: olt},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}
function getCustomer(customers_id) {
	jQuery.ajax({
		url: "customers_modal.php",
		data: {customers_id: customers_id},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}
function editCustomer(olt, pon_port, customers_id) {
	jQuery.ajax({
		url: "customers_modal.php",
		data: {olt: olt, pon_port: pon_port, customers_id: customers_id},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function addCustomer(olt, pon_port, sn) {
	jQuery.ajax({
		url: "customers_modal.php",
		data: {old_olt: olt, old_pon_port: pon_port, sn: sn},
		type: "POST"
	}).done(function(data){
		$('#modalbody').html(data);
		$('#myModal').modal('show'); 
		$('#xpon').dropdown();
		$('#profiles').dropdown();
		$('#tools').dropdown();
	});
}

function get_graph_power(id) {
        $('#output').html('<img src="pic/loading.gif" />');
        jQuery.ajax({
                url: "graph_power.php",
                data: {id: id},
                type: "GET",
                success:function(data){$('#output').html(data);}
        });
	
}

function get_graph_traffic(id) {
        $('#output').html('<img src="pic/loading.gif" />');
        jQuery.ajax({
                url: "graph_traffic.php",
                data: {id: id},
                type: "GET",
                success:function(data){$('#output').html(data);}
        });
}


function get_graph_packets(customer_id, type) {
        $('#output').html('<img src="pic/loading.gif" />');
        jQuery.ajax({
                url: "graph_packets.php",
                data: {id: customer_id, type: type},
                type: "GET",
                success:function(data){$('#output').html(data);}
        });
}

function graph_onu_ethernet_ports(id, port) {
        $('#output').html('<img src="pic/loading.gif" />');
        jQuery.ajax({
                url: "graph_onu_ethernet_ports.php",
                data: {id: id, port: port},
                type: "GET",
                success:function(data){$('#output').html(data);}
        });
}



$(document).ready(function(){
	$(document).on('click', '#navbar2 .nav li a', function () {
		 $('.active').removeClass('active');
		 $(this).parent().addClass('active');
	});
});

