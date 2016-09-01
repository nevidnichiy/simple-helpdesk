class Ticket < ApplicationRecord
  belongs_to :creator,  class_name: "User", foreign_key: "creator_id"
  belongs_to :executor, class_name: "User", foreign_key: "executor_id", required: false

  validates :subject, :message, :creator, presence: true
  validates :executor, presence: true, allow_nil: true

  enum status: [ :inserted, :processing, :reject, :done, :closed ]

end
