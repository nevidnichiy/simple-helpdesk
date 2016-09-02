class CreateAttachments < ActiveRecord::Migration[5.0]
  def change
    create_table :attachments do |t|
      t.references :ticket, index: true
      t.attachment :file
    end
  end
end
