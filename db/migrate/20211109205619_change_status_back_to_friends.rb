class ChangeStatusBackToFriends < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :status
    add_column :friends, :status, :string
  end
end
