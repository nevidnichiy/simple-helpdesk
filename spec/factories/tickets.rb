FactoryGirl.define do 
	factory :ticket do
		subject 'New ticket'
		message 'New ticket message'
		creator factory: :user
	end
end
