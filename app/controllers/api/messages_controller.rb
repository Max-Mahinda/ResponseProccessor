class Api::MessagesController < ApplicationController
    before_action :set_message, only: [:show, :update, :destroy]
    before_action :authenticate_user!, only: [:create, :update, :destroy]
    
    # GET /api/messages
    def index
      @content = Message.all
      render json: @content
    end
  
    def show
      render json: @message
    end
  
    def create
      @message = current_user.messages.new(message_params)
  
      if @message.save
        render json: @message, status: :created
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @message.update(message_params)
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /api/messages/1
    def destroy
      @message.destroy
      head :no_content
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:content)
    end
  end
  