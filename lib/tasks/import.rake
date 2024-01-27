# lib/tasks/import.rake
require 'csv'

namespace :import do
  desc "Import messages from CSV file"
  task messages: :environment do
    csv_file_path = 'C:\Users\123\Downloads\GeneralistRails_Project_MessageData (1).csv'

    # Check if the file exists before attempting to open it
    if File.exist?(csv_file_path)
      CSV.foreach(csv_file_path, headers: true) do |row|
        # Adjust the column name mapping according to your model
        Message.create!(user_id: row['User ID'], content: row['Content'])
      end

      puts "Import successful!"
    else
      puts "Error: CSV file not found at #{csv_file_path}."
    end
  end
end

