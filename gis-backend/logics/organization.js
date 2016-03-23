var organizationLogic = (function(vars, type) {
  var fields = vars;

  function getRequiredFields() {
    if(type == 'post') {
      fields = vars.body;
    }
  }

  return {
    postData: function() {
        var org = new organizationModel();
        org.organization_type_id= fields.organization_type_id;
    	org.conventional_type_id= fields.conventional_type_id;
    	org.non_bank_type_id= fields.non_bank_type_id;
    	org.non_bank_sub_type_id= fields.non_bank_sub_type_id;
        org.name = fields.name;
        org.address = fields.address;
    	org.province_id= fields.province_id;
    	org.city_id= fields.city_id;
        org.phone = fields.phone;
        org.coord = { latitude: fields.latitude, longitude: fields.longitude };
    	org.asset_size= fields.asset_size;
    	org.sales_size= fields.sales_size;
    	org.third_party_funds= fields.third_party_funds;
    	org.is_hq= fields.is_hq;
    	org.hq_address= fields.hq_address;
    	org.hq_id= fields.hq_id;
    	org.icon_image= fields.icon_image;
        org.financial_statement = fields.financial_statement;
        org.website = fields.website;

        org.save(function(err) {
            if(err)
                res.send(err);

            res.json({ message: 'New organization data added!'});
        });
    },

    getData: function() {
      if(fields.query['name']) {
			organizationModel.find({ name: fields.query['name'] }, function (err, orgs) {
				if(err)
					res.send(err);

				res.json(orgs);
			});
		}
		else {
			organizationModel.find(function (err, orgs) {
				if(err)
					res.send(err);

				res.json(orgs);
			})
		}
    }
  }
})()
