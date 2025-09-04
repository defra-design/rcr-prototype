//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// this is selcet-salmon-answer
router.post('/select-salmon-answer', function(request, response) {

	var selectSalmon = request.session.data['salmon-sea-trout']
	if (selectSalmon == "Yes"){
		response.redirect("/V2/summary-empty")
	} else {
		response.redirect("/V2/summary-confirm")
	}
})