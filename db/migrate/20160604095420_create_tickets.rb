class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
    	t.integer :creator_id, null: false
    	t.integer :executor_id
      t.string  :subject
      t.text    :message
      t.integer :priority, default: 1
      t.integer :status, default: 0
      t.timestamps null: false
    end

    add_index :tickets, :creator_id
    add_index :tickets, :executor_id
  end
end
