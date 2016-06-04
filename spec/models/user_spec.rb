require 'rails_helper'

RSpec.describe User, :type => :model do
	it "is valid with a full name" do
		user = build(:user, first_name: nil, last_name: nil, middle_name: nil)
		user.valid?
		expect(user.errors[:first_name]).to include("can't be blank")
		expect(user.errors[:last_name]).to include("can't be blank")
		expect(user.errors[:middle_name]).to include("can't be blank")
	end
	it "is invalid with a duplicate email address" do
		create(:user, email: 'user@email.com')
		user = build(:user, email: 'user@email.com')
		user.valid?
		expect(user.errors[:email]).to include('has already been taken')
	end
	it "returns a formated name as a string" do
		user = create(:user, first_name: 'John', last_name: 'Doe', middle_name: 'Jonny')
		expect(user.name).to eq 'Doe J. J.'
	end
end
