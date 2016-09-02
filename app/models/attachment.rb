class Attachment < ApplicationRecord
 belongs_to :ticket
 has_attached_file :file,
    # :path => ":rails_root/public/attachments/:ticket_id/:filename",
    :path => lambda { |attach| ":rails_root/public/attachments/#{attach.instance.ticket.id}/:filename" },
    :url  => "/files/:ticket_id/:filename"
 do_not_validate_attachment_file_type :file
end
