package po;

public class Exchange {
	private String id;
	private String uid_a;// 提交用户
	private String uid_b;// 被请求用户
	private String gid_a;// 可提供商品
	private String gid_b;// 期待交换商品
	private String date;// 申请时间
	private String info;// 备注信息
	private String statu;// 订单状态(submit:提交,success:交换成功,fail:交换失败)
	
	public Exchange(){
		
	}
	
	public Exchange(String id, String uid_a, String uid_b, String gid_a,
			String gid_b, String date, String info, String statu) {
		super();
		this.id = id;
		this.uid_a = uid_a;
		this.uid_b = uid_b;
		this.gid_a = gid_a;
		this.gid_b = gid_b;
		this.date = date;
		this.info = info;
		this.statu = statu;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUid_a() {
		return uid_a;
	}
	public void setUid_a(String uid_a) {
		this.uid_a = uid_a;
	}
	public String getUid_b() {
		return uid_b;
	}
	public void setUid_b(String uid_b) {
		this.uid_b = uid_b;
	}
	public String getGid_a() {
		return gid_a;
	}
	public void setGid_a(String gid_a) {
		this.gid_a = gid_a;
	}
	public String getGid_b() {
		return gid_b;
	}
	public void setGid_b(String gid_b) {
		this.gid_b = gid_b;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getStatu() {
		return statu;
	}
	public void setStatu(String statu) {
		this.statu = statu;
	}

	@Override
	public String toString() {
		return "Exchange [id=" + id + ", uid_a=" + uid_a + ", uid_b=" + uid_b
				+ ", gid_a=" + gid_a + ", gid_b=" + gid_b + ", date=" + date
				+ ", info=" + info + ", status=" + statu + "]";
	}

	
	
}
