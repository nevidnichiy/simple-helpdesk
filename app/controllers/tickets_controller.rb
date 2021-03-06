class TicketsController < ApplicationController
	
	def index
		@tickets = Ticket.all
	  render :json => @tickets
	end
	
	def create
		@ticket = Ticket.new(ticket_params)
		@ticket.creator = current_user

		if @ticket.save! 
		  params[:file].each do |key, value|
		    @ticket.attachments.create(file: value)
		  end
			# ChatChannel.broadcast_to current_user.id, message: 'This is a cool chat app.' 
			# ActionCable.server.broadcast "chat_channel_37", message: @ticket.message 
			render :json => {:saved => 'ok'}.to_json 
	    else
	        render :json => {:saved => 'fail'}.to_json 
		end
	        
	end

  def update
    @ticket = Ticket.find(params[:id])
    if @ticket.update(ticket_params)
      render :json => :status_ok
    end  
  
  end

	def show
		@ticket = Ticket.find(params[:id])
		render json: { 
			id: @ticket.id,
			created_at: @ticket.created_at,
			creator: @ticket.creator.full_name,
			executor: @ticket.executor.try(:full_name),
			message: @ticket.message,
			priority: @ticket.priority,
			status: @ticket.status,
			subject: @ticket.subject,
			updated_at: @ticket.updated_at
		}
	end

private
	def ticket_params
		params.require(:ticket).permit(:subject, :message, :priority)
	end
end