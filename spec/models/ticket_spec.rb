require 'rails_helper'

RSpec.describe Ticket, :type => :model do
	it 'has status new after crate' do
		expect(build(:ticket).status).to eq 'inserted'
	end
	it 'has middle priority after create' do 
		expect(build(:ticket).priority).to eq 1
	end
end