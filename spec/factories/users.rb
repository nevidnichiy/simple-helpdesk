FactoryGirl.define do
	factory :user do
		first_name 'John'
		last_name 'Doe'
		middle_name 'Johny'
		sequence(:email) { |n| "johndoe#{n}@mail.com" }
		password 'supersequrepassword'
	end
end
