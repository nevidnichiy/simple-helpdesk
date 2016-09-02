class TicketSerializer < ActiveModel::Serializer
  attributes :id, :status, :priority, :subject, :message, 
             :created_at, :creator_name
             
  def creator_name
    object.creator.name
  end
end
