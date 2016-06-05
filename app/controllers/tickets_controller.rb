class TicketsController < ApplicationController
	def new
		@ticket = Ticket.new
	end

	def create
		@ticket = Ticket.new(ticket_params)
		@ticket.creator = current_user
		if @ticket.save! 
			redirect_to root_path
		end
	end

	def show
		@ticket = Ticket.find(params[:id])
	end

private
	def ticket_params
		params.require(:ticket).permit(:subject, :message)
	end
end