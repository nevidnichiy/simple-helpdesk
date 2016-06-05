module DashboardHelper
	def priority_sign(priority)
		case priority
		when 0
			'<span class="mif-stop fg-emerald"></span>'.html_safe
		when 1
			'<span class="mif-stop fg-yellow"></span>'.html_safe
		when 2
			'<span class="mif-stop fg-red"></span>'.html_safe
		end
	end

	def status_badge(status)
		case status
		  when 'inserted'
		  	"<span class='badge bg-steel fg-white'>новая</span>".html_safe
		  when 'processing'
        "<span class='badge bg-cyan fg-white'>выполняется</span>".html_safe
      when 'done'
        "<span class='badge bg-green fg-white'>завершена</span>".html_safe
      when 'reject'
        "<span class='badge bg-darkRed fg-white'>отклонена</span>".html_safe
      when 'closed'
        "<span class='badge bg-emerald fg-white'>выполнена</span>".html_safe
      end
	end
end
