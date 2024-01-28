class Api::MessagesController < ApplicationController
    before_action :set_message, only: [:show, :update, :destroy]
    before_action :authenticate_user!, only: [:create, :update, :destroy]
  
    def index
      @messages = Message.all
      render json: @messages
    end
  
    def show
      render json: @message
    end
  
    def create
      if message_params[:content].nil?
        render json: { error: "Content cannot be null" }, status: :unprocessable_entity
        return
      end
  
      @message = current_user.messages.new(message_params)
  
      if @message.save
        handle_content_in_development 
        render json: @message, status: :created
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @message.update(message_params)
        handle_content_in_development 
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @message.destroy
      head :no_content
    end
  
    private
  
    def set_message
      @message = Message.find(params[:id])
    end
  
    def message_params
      params.require(:message).permit(:content)
    end
  
    def handle_content_in_development
      if Rails.env.development?
    
        Rails.logger.info("Handling content in development: #{@message.content}")
      end
    end
  end
  